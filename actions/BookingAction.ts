'use server';

import connectDB from '@/config/database';
import { renderError } from './Auth';
import { getUserId } from './UserId';
import Property from '@/models/Property';
import Booking from '@/models/Booking';
import { calculateTotals } from '@/utils/calculateTotals';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

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

// For bookings page
export const fetchBookings = async () => {
	await connectDB();

	const userId = await getUserId();

	const bookings = await Booking.find(
		{ profileId: userId },
		{ orderTotal: 1, totalNights: 1, checkIn: 1, checkOut: 1 }
	)
		.populate('propertyId', {
			_id: 1,
			name: 1,
			location: 1,
		})
		.sort({ createdAt: -1 });

	return bookings;
};

export const deleteBookingAction = async (prevState: { bookingId: string }) => {
	await connectDB();

	const userId = await getUserId();
	const { bookingId } = prevState;

	try {
		await Booking.deleteOne({
			_id: bookingId,
			profileId: userId,
		});
		revalidatePath('/bookings');
		return { message: 'Your booking deleted successfully' };
	} catch (error) {
		return renderError(error);
	}
};
