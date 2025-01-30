import React from 'react';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { markAsReadAction } from '@/actions/MessageAction';

const MarkAsReadButton = ({ messageId }: { messageId: string }) => {
	const markAsRead = markAsReadAction.bind(null, {
		messageId,
	});

	return (
		<FormContainer action={markAsRead}>
			<SubmitButton text='Mark As Read' />
		</FormContainer>
	);
};

export default MarkAsReadButton;
