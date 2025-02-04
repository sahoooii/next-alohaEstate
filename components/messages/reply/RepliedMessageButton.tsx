import React from 'react';
import MessageToggleButton from '../MessageToggleButton';
import RepliedMessageForm from './RepliedMessageForm';

const RepliedMessageButton = ({ repliedId }: { repliedId: string }) => {
	return (
		<MessageToggleButton actionType='replied'>
			<RepliedMessageForm repliedId={repliedId} />
		</MessageToggleButton>
	);
};

export default RepliedMessageButton;
