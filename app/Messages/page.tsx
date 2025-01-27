import { fetchAllMessages, fetchMessages } from '@/actions/MessageAction';
import MessageCard from '@/components/messagges/MessageCard';
import PaginationPage from '@/components/properties/PaginationPage';
import { formatQuantity } from '@/utils/format';
import { MessagesType } from '@/utils/types';

const Messages = async ({
	searchParams,
}: {
	searchParams: {
		page: string;
	};
}) => {
	const paginationPage =
		searchParams.page === undefined ? 1 : parseInt(searchParams.page);

	const pageSize = '6';
	const paginationPageSize = parseInt(pageSize);

	const messages = await fetchMessages({
		page: paginationPage,
		pageSize: paginationPageSize,
	});
	// console.log(messages);

	const totalMessages = await fetchAllMessages();

	const totalPages = Math.ceil(totalMessages / paginationPageSize);

	const showPagination = totalMessages > paginationPageSize;

	const showMessages: MessagesType[] = messages.map((message) => {
		message.sender = message.sender;
		message.property = message.propertyId;
		return message;
	});
	// console.log('show:',showMessages);

	return (
		<section className='container mt-8 mb-24'>
			{totalMessages === 0 && <p>You have no messages</p>}
			{/* Title size */}
			<h1 className='text-3xl font-bold mb-4'>
				You have {totalMessages > 1 && formatQuantity(totalMessages, 'message')}
			</h1>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{showMessages.map((message) => {
					return <MessageCard key={message._id} message={message} />;
				})}
			</div>
			<div className='mb-20 md:mb-12 lg:mb-24'>
				{showPagination && (
					<PaginationPage
						page={paginationPage}
						totalPages={totalPages}
						linkName='messages'
					/>
				)}
			</div>
		</section>
	);
};

export default Messages;
