import { fetchMessages } from '@/actions/MessageAction';
import MessageCard from '@/components/messagges/MessageCard';
import { formatQuantity } from '@/utils/format';
import { MessagesType } from '@/utils/types';

const Messages = async () => {
	const messages = await fetchMessages();

	const showMessages: MessagesType[] = messages.map((message) => {
		message.sender = message.sender;
		message.property = message.propertyId;
		return message;
	});
	// console.log('show:',showMessages);

	return (
		<section className='container mt-8 mb-24'>
			{showMessages.length === 0 && <p>You have no messages</p>}
			{/* Title size */}
			<h1 className='text-3xl font-bold mb-4'>
				You have{' '}
				{showMessages.length > 1 &&
					formatQuantity(showMessages.length, 'message')}
			</h1>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{showMessages.map((message) => {
					return <MessageCard key={message._id} message={message} />;
				})}
			</div>
		</section>
	);
};

export default Messages;
