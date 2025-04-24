import FormContainer from '@/components/form/FormContainer'
import { sendReplyMessageAction } from '@/actions/MessageAction'

const ChatMessageForm = () => {
	return (
		<FormContainer action={sendReplyMessageAction}>
			<div className='mt-4 pt-4 border-t flex gap-3'>
				<input
					type='text'
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
}

export default ChatMessageForm
