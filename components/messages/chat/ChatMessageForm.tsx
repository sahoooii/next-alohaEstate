import { replyMessageAction } from '@/actions/MessageAction';
import FormContainer from '@/components/form/FormContainer';
import { useRef } from 'react';

type Props = {
	currentUserId: string;
	senderId: string;
	propertyId: string;
	onSendMessage: (message: string) => void;
};

const ChatMessageForm = ({
	currentUserId,
	senderId,
	propertyId,
	onSendMessage,
}: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const clearInput = () => {
		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	return (
		<FormContainer
			action={async (prevState: unknown, formData: FormData) => {
				const message = formData.get('message') as string;

				if (!message.trim() || message.trim().length < 10) {
					return { message: 'Message must be at least 10 characters' };
				}
				if (message.trim().length > 3000) {
					return { message: 'Message must be in 3000 characters or less' };
				}
				// Optimistic UI
				onSendMessage(message); // クライアント側で即描画

				const result = await replyMessageAction(prevState, formData);
				clearInput();
				return result;
			}}
		>
			<div className='mt-4 pt-4 border-t flex gap-3'>
				<input name='recipient' type='hidden' value={senderId} />
				<input name='sender' type='hidden' value={currentUserId} />
				<input name='propertyId' type='hidden' value={propertyId} />

				<input
					type='text'
					name='message'
					ref={inputRef}
					placeholder='Type your message...'
					className='flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base'
				/>
				<button
					type='submit'
					className='bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition text-sm md:text-base'
				>
					Send
				</button>
			</div>
		</FormContainer>
	);
};

export default ChatMessageForm;
