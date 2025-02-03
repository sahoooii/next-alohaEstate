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
import { MdOutlineReply, MdOutlineMarkEmailUnread } from 'react-icons/md';
import DeleteMessageContainer from './DeleteMessageContainer';
import MarkAsReadContainer from './MarkAsReadContainer';
import ReplyMessageButton from './reply/ReplyMessageButton';

const MessageCard = ({ message }: { message: MessagesType }) => {
	const messageId = message._id.toString();
	const propertyId = message.property._id.toString();
	// For reply message
	const senderName =
		message.recipient.firstName + ' ' + message.recipient.lastName;
	const senderEmail = message.recipient.email;
	const recipientId = message.sender._id.toString();
	const replayMessage = {
		messageId,
		senderName,
		senderEmail,
		recipientId,
		propertyId,
	};
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
			<CardHeader className='text-xl'>
				<div className='flex items-center gap-x-4'>
					<Image
						src={message.sender.profileImage}
						width={50}
						height={50}
						alt={message.sender.firstName}
						className='rounded-full object-cover'
					/>
					<div className='ml-4'>
						<h3 className='text-base font-bold capitalize mb-1'>
							From: {message.sender.firstName} {message.sender.lastName}
						</h3>
						<Link href={`/properties/${propertyId}`}>
							<h3 className='text-base text-blue-600 font-bold capitalize mb-1 underline'>
								{message.property.name}
							</h3>
						</Link>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className='mb-4 py-5 px-3 bg-white rounded-xl shadow-lg'>
					<div className='flex items-center gap-2 mb-1'>
						<IoLogoWechat className='text-primary mr-1' size={24} />
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
			<CardFooter className='flex items-center justify-end'>
				{!message.read ? (
					<MarkAsReadContainer messageId={messageId} />
				) : (
					<ReplyMessageButton replayMessage={replayMessage} />
				)}
			</CardFooter>
		</Card>
	);
};

export default MessageCard;
