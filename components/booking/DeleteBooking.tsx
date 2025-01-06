import { deleteBookingAction } from '@/actions/BookingAction';
import React from 'react';
import FormContainer from '../form/FormContainer';
import IconButton from '../form/IconButton';

const DeleteBooking = ({ bookingId }: { bookingId: string }) => {
	const deleteBooking = deleteBookingAction.bind(null, { bookingId });
	return (
		<FormContainer action={deleteBooking}>
			<IconButton actionType='delete' />
		</FormContainer>
	);
};

export default DeleteBooking;
