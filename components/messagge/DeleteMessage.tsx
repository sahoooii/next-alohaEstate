import FormContainer from '@/components/form/FormContainer';
import { deleteMessageAction } from '@/actions/MessageAction';
import DeleteReviewButton from '@/components/reviews/DeleteReviewButton';

const DeleteMessage = ({
	messageId,
	propertyId,
}: {
	messageId: string;
	propertyId: string;
}) => {
	const deleteMessage = deleteMessageAction.bind(null, {
		messageId,
		propertyId,
	});

	return (
		<FormContainer action={deleteMessage}>
			<DeleteReviewButton actionType='delete' />
		</FormContainer>
	);
};

export default DeleteMessage;
