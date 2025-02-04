import MessageForm from './MessageForm';
import MessageToggleButton from './MessageToggleButton';

const MessageFormButton = ({
	ownerId,
	propertyId,
}: {
	ownerId: string;
	propertyId: string;
}) => {
	return (
		<MessageToggleButton actionType='send'>
			<MessageForm ownerId={ownerId} propertyId={propertyId} />
		</MessageToggleButton>
	);
};

export default MessageFormButton;
