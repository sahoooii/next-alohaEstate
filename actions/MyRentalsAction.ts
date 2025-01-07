'use server';

import connectDB from '@/config/database';
import { renderError } from './Auth';
import { getUserId } from './UserId';
import Property from '@/models/Property';
import { revalidatePath } from 'next/cache';
import Booking from '@/models/Booking';

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
