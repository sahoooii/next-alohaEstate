'use server';

import connectDB from '@/config/database';
import { renderError } from './Auth';
import { getUserId } from './AuthUserAction';
import Property from '@/models/Property';
import { revalidatePath } from 'next/cache';
import Booking from '@/models/Booking';
import {
	imagesSchema,
	propertySchema,
	validateWithZodSchema,
} from '@/utils/schemas';
import { uploadImages } from '@/utils/imageUpload';

export const fetchRentals = async () => {
	await connectDB();
	const userId = await getUserId();

	const rentals = await Property.find(
		{ owner: userId },
		{
			_id: 1,
			name: 1,
			price: 1,
		}
	);

	const rentalsWithBookingSums = await Promise.all(
		rentals.map(async (rental) => {
			const totalNightSum = await Booking.aggregate([
				{
					$match: {
						propertyId: rental._id,
						paymentStatus: true,
					},
				},
				{ $group: { _id: rental._id, totalNights: { $sum: '$totalNights' } } },
			]);

			const totalNights = totalNightSum.map((night) => night.totalNights);

			const orderTotalSum = await Booking.aggregate([
				{
					$match: {
						propertyId: rental._id,
					},
				},
				{ $group: { _id: rental._id, orderTotal: { $sum: '$orderTotal' } } },
			]);

			const orderTotal = orderTotalSum.map((order) => order.orderTotal);

			return {
				rental,
				totalNightsSum: totalNights,
				orderTotalSum: orderTotal,
			};
		})
	);
	return rentalsWithBookingSums;
};

export const deleteRentalAction = async (prevState: { propertyId: string }) => {
	await connectDB();

	const { propertyId } = prevState;
	const userId = await getUserId();

	try {
		await Property.deleteOne({ _id: propertyId, owner: userId });
		revalidatePath('/rentals');
		return { message: 'This property deleted successfully' };
	} catch (error) {
		return renderError(error);
	}
};

// Edit my rentals Page
export const fetchRentalDetails = async (propertyId: string) => {
	await connectDB();
	const userId = await getUserId();

	return await Property.findOne({ _id: propertyId, owner: userId }, {});
};

export const updatePropertyAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	await connectDB();
	const userId = await getUserId();
	const propertyId = formData.get('id') as string;

	try {
		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(propertySchema, rawData);

		await Property.findOneAndUpdate(
			{ _id: propertyId, owner: userId },
			{
				location: {
					street: validatedFields.street,
					city: validatedFields.city,
					state: validatedFields.state,
					zipcode: validatedFields.zipcode,
				},
				...validatedFields,
			}
		);
		revalidatePath(`/rentals/${propertyId}/edit`);
		return { message: 'Updated property successfully' };
	} catch (error) {
		return renderError(error);
	}
};

export const updatePropertyImagesAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	await connectDB();
	const userId = await getUserId();
	const propertyId = formData.get('id') as string;

	try {
		const files = formData.getAll('images') as File[];
		const images = files.filter((image) => image.name !== '');
		validateWithZodSchema(imagesSchema, { images });

		const fileName = 'properties';
		const imagesUrls: string[] = await uploadImages(images, fileName);

		await Property.findOneAndUpdate(
			{ _id: propertyId, owner: userId },
			{ images: imagesUrls }
		);

		revalidatePath(`/rentals/${propertyId}/edit`);
		return { message: 'Updated property images successfully' };
	} catch (error) {
		return renderError(error);
	}
};
