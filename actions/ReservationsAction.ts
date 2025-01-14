'use server';

import connectDB from '@/config/database';
import { getUserId } from './AuthUserAction';
import Booking from '@/models/Booking';

export const fetchReservations = async () => {
	await connectDB();
	const userId = await getUserId();

	const reservations = await Booking.find(
		{ profileId: userId },
		{ orderTotal: 1, totalNights: 1, checkIn: 1, checkOut: 1 }
	)
		.populate('propertyId', {
			_id: 1,
			name: 1,
			location: 1,
		})
		.sort({ createdAt: -1 });

	return reservations;
};
