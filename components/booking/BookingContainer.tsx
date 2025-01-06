'use client';

import { useProperty } from '@/utils/store';
import ConfirmBooking from './ConfirmBooking';
import BookingForm from './BookingForm';

const BookingContainer = () => {
	const { range } = useProperty((state) => state);

	// If user not selected date range
	if (!range || !range.from || !range.to) return null;
	// At least stay one night
	if (range.to.getTime() === range.from.getTime()) return null;

	return (
		<div className='w-full'>
			<BookingForm />
			<ConfirmBooking />
		</div>
	);
};

export default BookingContainer;
