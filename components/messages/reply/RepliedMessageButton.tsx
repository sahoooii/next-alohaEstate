import React from 'react';
import MessageToggleButton from '../MessageToggleButton';
import RepliedMessageForm from './RepliedMessageForm';

const RepliedMessageButton = ({ messageId }: { messageId: string }) => {
	return (
		<MessageToggleButton actionType='replied'>
			<RepliedMessageForm messageId={messageId} />
		</MessageToggleButton>
	);
};

export default RepliedMessageButton;
