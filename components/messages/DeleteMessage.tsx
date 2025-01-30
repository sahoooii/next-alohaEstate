import FormContainer from '@/components/form/FormContainer';
import { deleteMessageAction } from '@/actions/MessageAction';
import DeleteReviewButton from '@/components/reviews/DeleteReviewButton';

const DeleteMessage = ({ messageId }: { messageId: string }) => {
	const deleteMessage = deleteMessageAction.bind(null, {
		messageId,
	});

	return (
		<FormContainer action={deleteMessage}>
			<DeleteReviewButton actionType='delete' />
		</FormContainer>
	);
};

export default DeleteMessage;
