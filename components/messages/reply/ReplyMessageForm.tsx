import { sendReplyMessageAction } from '@/actions/MessageAction';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import TextAreaInput from '@/components/form/TextAreaInput';
import { ReplyMessageProps } from '@/utils/types';
import React from 'react';

const ReplyMessageForm = ({
	replayMessage: { senderName, senderEmail, recipientId, propertyId },
}: ReplyMessageProps) => {
	// const message = await fetchReplyMessage(messageId);
	return (
		<div className='bg-white p-8 rounded-lg shadow-md mt-4'>
			<FormContainer action={sendReplyMessageAction}>
				<div className='grid gap-6 mb-4 w-[250px]'>
					<input name='recipient' type='hidden' value={recipientId} />
					<input name='propertyId' type='hidden' value={propertyId} />
					<input name='name' type='hidden' value={senderName} />
					<input name='email' type='hidden' value={senderEmail} />
					<TextAreaInput
						name='message'
						labelText='Message (5 - 3000 words)'
						placeholder='ex: Thank you for your message ...'
					/>
				</div>
				<div className='flex justify-center'>
					<SubmitButton
						text='submit'
						className='w-full md:w-[60%] mt-12 bg-gray-700 hover:bg-gray-400'
					/>
				</div>
			</FormContainer>
		</div>
	);
};

export default ReplyMessageForm;
