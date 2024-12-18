'use server';

import connectDB from '@/config/database';
import { getAuthUser, renderError } from './Auth';
import Property from '@/models/Property';
import { createReviewSchema, validateWithZodSchema } from '@/utils/schemas';

import { revalidatePath } from 'next/cache';
import Profile from '@/models/Profile';

export const createReviewAction = async (
	prevState: unknown,
	formData: FormData
) => {
	await connectDB();
	const user = await getAuthUser();

	try {
		const profile = await Profile.find(
			{ clerkId: user.id },
			{ firstName: 1, lastName: 1, profileImage: 1 }
		);

		const { firstName, lastName, profileImage } = profile[0];
		const fullName = `${firstName} ${lastName}`;

		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(createReviewSchema, rawData);

		const { propertyId, rating, comment } = validatedFields;

		const property = await Property.findById(propertyId);

		// Each person only one review for each property
		if (property) {
			const alreadyReviewed = property.reviews.find(
				(review: { profileId: string }) => review.profileId === user.id
			);

			if (alreadyReviewed) {
				return { message: 'You already reviewed this property' };
			}

			const review = {
				profileId: user.id,
				name: fullName,
				profileImage: profileImage,
				rating: Number(rating),
				comment: comment,
			};

			property.reviews.push(review);
			await property.save();
		}
		revalidatePath(`/properties/${propertyId}`);

		return { message: 'Created review successfully' };
	} catch (error) {
		return renderError(error);
	}
};

// Show at property details page
export const fetchPropertyReviews = async (propertyId: string) => {
	await connectDB();

	const reviews = await Property.findById(
		{ _id: propertyId },
		{
			reviews: {
				profileId: 1,
				name: 1,
				profileImage: 1,
				rating: 1,
				comment: 1,
				_id: 1,
				createdAt: 1,
			},
		}
	).sort({ createdAt: -1 });

	return reviews;
};

// Show at reviews page
// Add date
export const fetchPropertyReviewsByUser = async () => {
	await connectDB();
	const user = await getAuthUser();

	const reviews = await Property.aggregate([
		{ $unwind: { path: '$reviews' } },
		{
			$match: {
				'reviews.profileId': user.id,
			},
		},
		{
			$project: {
				images: 1,
				name: 1,
				reviews: {
					profileId: 1,
					name: 1,
					profileImage: 1,
					rating: 1,
					comment: 1,
					_id: 1,
					createdAt: 1,
				},
			},
		},
	]);

	// console.log('reviews:', reviews);

	return reviews;
};

export const deleteReviewAction = async (prevState: {
	propertyId: string;
	reviewId: string;
}) => {
	await connectDB();
	const user = await getAuthUser();
	const { propertyId, reviewId } = prevState;

	try {
		const reviews = await Property.find(
			{ _id: propertyId },
			{ reviews: { _id: 1 } }
		);

		const deleteReview = reviews[0].reviews.find(
			(review: { _id: { toString: () => string } }) =>
				review._id.toString() === reviewId
		);
		// console.log('deleteReview:', deleteReview._id);

		await Property.findOneAndUpdate(
			{ _id: propertyId, 'reviews.profileId': user.id },
			{
				$pull: { reviews: deleteReview },
			},
			{
				new: true,
			}
		);

		revalidatePath('/reviews');
		return { message: 'Deleted Review successfully' };
	} catch (error) {
		return renderError(error);
	}
};
