import React from 'react';
import BreadCrumps from '@/components/propertyDetails/BreadCrumps';
import { fetchMessageChat } from '@/actions/MessageAction';
import Link from 'next/link';
import ChatCard from '@/components/messages/chat/ChatCard';
import { getUserId } from '@/actions/AuthUserAction';

const MessageChatPage = async ({
	params,
}: {
	params: { userId: string; propertyId: string };
}) => {
	const userId = params.userId;
	const propertyId = params.propertyId;

	const currentUserId = await getUserId();

	const messages = await fetchMessageChat(userId, propertyId);
	const serializedMessages = JSON.parse(JSON.stringify(messages));

	const senderName =
		messages.length > 0
			? messages[0].sender.firstName + ' ' + messages[0].sender.lastName
			: '';

	return (
		<div className='container mt-8 mb-32'>
			<BreadCrumps name={senderName} link='/messages' title='All Messages' />
			<div className=' mt-4 mb-4'>
				{messages.length > 0 && (
					<Link href={`/properties/${propertyId}`} className='underline'>
						<h1 className='text-3xl'>{messages[0].propertyId.name}</h1>
					</Link>
				)}
			</div>
			<div className='sm:p-10'>
				<ChatCard
					messages={serializedMessages}
					currentUserId={currentUserId.toString()}
					senderId={userId}
					propertyId={propertyId}
				/>
			</div>
		</div>
	);
};

export default MessageChatPage;
