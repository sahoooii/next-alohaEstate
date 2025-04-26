import {
	fetchGroupedMessagesLength,
	fetchGroupedMessages,
} from '@/actions/MessageAction';
import MessageCard from '@/components/messages/MessageCard';
import EmptyList from '@/components/properties/EmptyList';
import PaginationPage from '@/components/properties/PaginationPage';
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

	const pageSize = '8';
	const paginationPageSize = parseInt(pageSize);

	const groupedMessages = await fetchGroupedMessages({
		page: paginationPage,
		pageSize: paginationPageSize,
	});
	// console.log('groupedMessages:', groupedMessages);

	const groupTotalMessages = await fetchGroupedMessagesLength();

	const totalPages = Math.ceil(groupTotalMessages / paginationPageSize);

	const showPagination = groupTotalMessages > paginationPageSize;

	const showMessages: MessagesType[] = groupedMessages.map((message) => {
		message.sender = message.sender;
		message.property = message.property;
		return message;
	});

	return (
		<section className='container mt-8 mb-32'>
			{groupTotalMessages === 0 && (
				<EmptyList
					heading='No Messages'
					message='Find a new Vacation!!'
				/>
			)}

			<div className='mt-8'>
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
