import FormContainer from '@/components/form/FormContainer';
import { deleteMessageAction } from '@/actions/MessageAction';
import { DeleteMessageButton } from './DeleteMessageButton';

const DeleteMessageContainer = ({
	messageId,
	isRead,
}: {
	messageId: string;
	isRead: boolean;
}) => {
	const deleteMessage = deleteMessageAction.bind(null, {
		messageId,
	});

	return (
		<FormContainer action={deleteMessage}>
			<DeleteMessageButton isReadMessage={isRead} />
		</FormContainer>
	);
};

export default DeleteMessageContainer;
