'use server';

import connectDB from '@/config/database';
import { renderError } from './Auth';
import { getUserId } from './UserId';
import Property from '@/models/Property';
import Booking from '@/models/Booking';
import { calculateTotals } from '@/utils/calculateTotals';
import { redirect } from 'next/navigation';

export const createBookingAction = async (prevState: {
	propertyId: string;
	checkIn: Date;
	checkOut: Date;
}) => {
	await connectDB();

	const userId = await getUserId();
	const { propertyId, checkIn, checkOut } = prevState;
	console.log('checkIn:', checkIn);

	const property = await Property.findById(propertyId, { price: 1 });

	if (!property) {
		return { message: 'Property not found' };
	}

	const { orderTotal, totalNights } = calculateTotals({
		checkIn,
		checkOut,
		price: property.price,
	});

	try {
		const newBooking = new Booking({
			profileId: userId,
			propertyId,
			orderTotal,
			totalNights,
			checkIn,
			checkOut,
		});

		await newBooking.save();
	} catch (error) {
		return renderError(error);
	}

	redirect('/bookings');
};
