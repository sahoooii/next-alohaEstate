'use server';

import connectDB from '@/config/database';
import { renderError } from './Auth';
import Property from '@/models/Property';
import { createReviewSchema, validateWithZodSchema } from '@/utils/schemas';
import { revalidatePath } from 'next/cache';
import Profile from '@/models/Profile';
import { getUserId } from './UserId';

export const createReviewAction = async (
	prevState: unknown,
	formData: FormData
) => {
	await connectDB();

	const userId = await getUserId();

	try {
		const profile = await Profile.findById(userId, {
			firstName: 1,
			lastName: 1,
			profileImage: 1,
		});

		const { firstName, lastName, profileImage } = profile;
		const fullName = `${firstName} ${lastName}`;

		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(createReviewSchema, rawData);

		const { propertyId, rating, comment } = validatedFields;

		const property = await Property.findById(propertyId);

		// Each person only one review for each property
		if (property) {
			const alreadyReviewed = property.reviews.find(
				(review: { profileId: string }) => review.profileId === userId
			);

			if (alreadyReviewed) {
				return { message: 'You already reviewed this property' };
			}

			const review = {
				profileId: userId,
				fullName: fullName,
				profileImage: profileImage,
				rating: Number(rating),
				comment: comment,
			};

			property.reviews.push(review);

			// Average rate calculation
			property.numReviews = property.reviews.length;

			property.averageRating = (
				property.reviews.reduce(
					(acc: number, property: { rating: number }) => acc + property.rating,
					0
				) / property.reviews.length
			).toFixed(1);

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
				fullName: 1,
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
export const fetchPropertyReviewsByUser = async ({
	page,
	pageSize,
}: {
	page: number;
	pageSize: number;
}) => {
	await connectDB();

	const userId = await getUserId();

	const skip = (page - 1) * pageSize;

	const reviews = await Property.aggregate([
		{ $unwind: { path: '$reviews' } },
		{
			$match: {
				'reviews.profileId': userId,
			},
		},
		{
			$project: {
				images: 1,
				name: 1,
				reviews: {
					profileId: 1,
					fullName: 1,
					profileImage: 1,
					rating: 1,
					comment: 1,
					_id: 1,
					createdAt: 1,
				},
			},
		},
	])
		.sort({ createdAt: 1 })
		.skip(skip)
		.limit(pageSize);

	return reviews;
};

// For pagination
export const fetchAllReviewsByUser = async () => {
	await connectDB();

	const userId = await getUserId();

	const totalReviews = await Property.aggregate([
		{ $unwind: { path: '$reviews' } },
		{
			$match: {
				'reviews.profileId': userId,
			},
		},
	]);

	return totalReviews.length;
};

export const deleteReviewAction = async (prevState: {
	propertyId: string;
	reviewId: string;
}) => {
	await connectDB();

	const userId = await getUserId();

	const { propertyId, reviewId } = prevState;

	try {
		let property = await Property.findById(
			{ _id: propertyId },
			{ averageRating: 1, numReviews: 1, reviews: 1 }
		);

		const deleteReview = property.reviews.find(
			(review: { _id: { toString: () => string } }) =>
				review._id.toString() === reviewId
		);

		property = await Property.findOneAndUpdate(
			{ _id: propertyId, 'reviews.profileId': userId },
			{
				$pull: { reviews: deleteReview },
			},
			{
				new: true,
			}
		);

		property.numReviews = property.reviews.length;

		property.averageRating =
			property.numReviews > 0 &&
			(
				property.reviews.reduce(
					(acc: number, property: { rating: number }) => acc + property.rating,
					0
				) / property.reviews.length
			).toFixed(1);

		await property.save();

		revalidatePath('/reviews');
		return { message: 'Deleted Review successfully' };
	} catch (error) {
		return renderError(error);
	}
};

export const fetchPropertyRating = async (propertyId: string) => {
	await connectDB();

	const rating = await Property.findById(
		{ _id: propertyId },
		{ numReviews: 1, averageRating: 1 }
	);

	return rating;
};

export const findExistingReview = async (
	// userId: string,
	propertyId: string
) => {
	await connectDB();

	const userId = await getUserId();

	return await Property.findOne(
		{ 'reviews.profileId': userId, _id: propertyId },
		{}
	);
};
