'use server';

import connectDB from '@/config/database';
import { getAuthUser, renderError } from './Auth';
import Property from '@/models/Property';
import { createReviewSchema, validateWithZodSchema } from '@/utils/schemas';

import { revalidatePath } from 'next/cache';

export const createReviewAction = async (
	prevState: unknown,
	formData: FormData
) => {
	await connectDB();
	const user = await getAuthUser();

	try {
		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(createReviewSchema, rawData);

		const { propertyId, rating, comment } = validatedFields;
		const fullName = `${user.firstName} ${user.lastName}`;

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
				profileImage: user.imageUrl,
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
			},
		}
	).sort({ createdAt: -1 });

	return reviews;
};

export const fetchPropertyReviewsByUser = async () => {
	return { message: 'fetch Reviews' };
};

export const deleteReviewAction = async () => {
	return { message: 'Delete Review' };
};
