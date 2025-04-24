import React from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import { MessagesType } from '@/utils/types';
import Link from 'next/link';
import { IoLogoWechat } from 'react-icons/io5';
import {
	MdOutlineReply,
	MdOutlineMarkEmailUnread,
	MdDateRange,
} from 'react-icons/md';
import DeleteMessageContainer from './DeleteMessageContainer';
import MarkAsReadContainer from './MarkAsReadContainer';
import ReplyMessageButton from './reply/ReplyMessageButton';
import RepliedMessageButton from './reply/RepliedMessageButton';

const MessageCard = ({ message }: { message: MessagesType }) => {
	const messageId = message._id.toString();
	const propertyId = message.property._id.toString();
	const senderId = message.sender._id.toString();

	// For reply message
	const senderName =
		message.recipient.firstName + ' ' + message.recipient.lastName;
	const senderEmail = message.recipient.email;
	const recipientId = message.sender._id.toString();
	const replyMessage = {
		messageId,
		senderName,
		senderEmail,
		recipientId,
		propertyId,
	};
	// console.log('replyMessage:', senderEmail);

	return (
		<Card className='relative p-1 rounded-md shadow-md'>
			{!message.read ? (
				<div className='absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md'>
					<div className='flex gap-1 items-center'>
						<p>New</p>
						<MdOutlineMarkEmailUnread size={16} />
					</div>
				</div>
			) : (
				<div className='absolute top-2 right-2'>
					<DeleteMessageContainer messageId={messageId} isRead={message.read} />
				</div>
			)}
			<CardHeader className='text-xl mt-5'>
				<div className='flex items-center gap-x-4'>
					<Image
						src={message.sender.profileImage}
						width={50}
						height={50}
						alt={message.sender.firstName}
						className='rounded-full object-cover w-[50px] h-[50px]'
					/>
					<div className='ml-4'>
						<Link
							href={`/messages/${senderId}/${propertyId}`}
							className='text-sm text-blue-600 underline'
						>
							<h3 className='text-base font-bold capitalize mb-1 underline'>
								From: {message.sender.firstName} {message.sender.lastName}
							</h3>
						</Link>
						<Link href={`/properties/${propertyId}`}>
							<h3 className='text-base font-bold capitalize mb-1 underline'>
								{message.property.name}
							</h3>
						</Link>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className='mb-4 px-3 bg-white rounded-xl shadow-lfg'>
					<Link
						href={`/messages/${senderId}/${propertyId}`}
						className='text-sm text-blue-600 underline'
					>
						<div className='flex items-center mb-1'>
							<IoLogoWechat className='text-primary mr-2' size={20} />
							<p className='text-base font-bold'>Chat</p>
						</div>
					</Link>

					<div className='flex items-center gap-2 mb-1'>
						<MdDateRange className='text-primary mr-1' size={20} />
						<p className='text-xs text-muted-foreground'>
							{new Date(message.createdAt).toLocaleString()}
						</p>
					</div>

					<div className='flex items-center gap-1 mb-2'>
						<MdOutlineReply className='text-primary mr-1' size={20} />
						<p className='text-xs text-muted-foreground'>Reply:</p>{' '}
						<a
							href={`mailto:${message.email}`}
							className='underline text-blue-500 text-xs'
						>
							{message.email}
						</a>
					</div>

					<div>
						<p className='text-gray-700'>{message.message}</p>
					</div>
				</div>
			</CardContent>
			{/* Mark as read button */}
			{!message.read && (
				<CardFooter className='flex items-center justify-end'>
					<MarkAsReadContainer messageId={messageId} />
				</CardFooter>
			)}
			{/* Reply message */}
			{message.read && !message.repliedMessage[0]?.youGotReplied && (
				<CardFooter className='flex items-center justify-end'>
					<ReplyMessageButton replyMessage={replyMessage} />
				</CardFooter>
			)}

			{/* Show replied message */}
			<div className='p-6 pt-0'>
				{message.read && message.repliedMessage[0]?.youGotReplied && (
					<RepliedMessageButton messageId={messageId} />
				)}
			</div>
		</Card>
	);
};

export default MessageCard;
