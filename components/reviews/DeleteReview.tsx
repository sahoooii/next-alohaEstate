import React from 'react';
import FormContainer from '../form/FormContainer';
import DeleteReviewButton from './DeleteReviewButton';
import { deleteReviewAction } from '@/actions/ReviewsAction';

const DeleteReview = ({
	reviewId,
	propertyId,
}: {
	reviewId: string;
	propertyId: string;
}) => {
	const deleteReview = deleteReviewAction.bind(null, { reviewId, propertyId });

	return (
		<FormContainer action={deleteReview}>
			<DeleteReviewButton actionType='delete' />
		</FormContainer>
	);
};

export default DeleteReview;
