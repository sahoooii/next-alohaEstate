'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MessagesType } from '@/utils/types';
import ChatMessageForm from './ChatMessageForm';
import { useGlobalContext } from '@/context/GlobalContext';
import { markMessagesAsRead } from '@/actions/MessageAction';

type Props = {
	messages: MessagesType[];
	currentUserId: string;
	senderId: string;
	propertyId: string;
};

const ChatCard = ({ messages, currentUserId, senderId, propertyId }: Props) => {
const [chatMessages, setChatMessages] = useState<MessagesType[]>(messages);

const handleSendMessage = (text: string) => {
	setChatMessages((prev) => [
		...prev,
		{
			_id: 'optimistic-' + Date.now(),
			message: text,
			sender: {
				_id: currentUserId,
				firstName: messages[0].sender.firstName,
				lastName: messages[0].sender.lastName,
				profileImage: messages[0].recipient.profileImage,
			},
			recipient: {
				_id: senderId,
				firstName: messages[0].recipient.firstName,
				lastName: messages[0].recipient.lastName,
				profileImage: messages[0].recipient.profileImage,
			},
			property: {
				_id: propertyId,
				name: '',
			},
			name: currentUserId,
			submitted: true,
			read: false,
			createdAt: new Date(),
			updateAt: new Date(),
		},
	]);
};

	const { refreshUnreadCount } = useGlobalContext();

	const hasMarkedAsRead = useRef(false);
	useEffect(() => {
		if (hasMarkedAsRead.current) return;

		const handleMarkReadAndRefresh = async () => {
			await markMessagesAsRead(senderId, propertyId);
			refreshUnreadCount();
			hasMarkedAsRead.current = true;
		};

		handleMarkReadAndRefresh();
	}, [senderId, propertyId, refreshUnreadCount]);

	return (
		<div className='md:border md:rounded-md sm:px-5 px-0 py-6 max-w-full md:max-w-5xl mx-auto h-[80vh] flex flex-col justify-between'>
			{/* 💬 チャット一覧 */}
			<div className='overflow-y-auto space-y-6 md:space-y-5 mb-6 pr-1'>
				{chatMessages.map((message) => {
					const isSender =
						message.sender._id.toString() === currentUserId.toString();

					return (
						<div
							key={message._id}
							className={`flex ${isSender ? 'justify-end' : 'justify-start'}`}
						>
							<div
								className={`flex items-start gap-2 ${
									isSender ? 'flex-row-reverse' : ''
								}`}
							>
								{/* 🖼 プロフィール画像 */}
								<Image
									src={
										isSender
											? message.sender.profileImage
											: message.sender.profileImage
									}
									width={36}
									height={36}
									alt='user'
									className='rounded-full w-9 h-9 object-cover'
								/>

								{/* 💬 メッセージバブル */}
								<div
									className={`px-4 py-3 rounded-lg text-sm sm:text-base shadow-sm ${
										isSender
											? 'bg-blue-500 text-white ml-auto'
											: 'bg-gray-100 text-gray-800 mr-auto'
									} max-w-[65%] sm:max-w-[70%] md:max-w-[70%]`}
								>
									<p>{message.message}</p>
									<p className='text-[10px] sm:text-xs mt-1 text-gray-400 text-right'>
										{new Date(message.createdAt).toLocaleString()}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<ChatMessageForm
				currentUserId={currentUserId}
				senderId={senderId}
				propertyId={propertyId}
				onSendMessage={handleSendMessage}
			/>
		</div>
	);
};
export default ChatCard;
