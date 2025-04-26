import React from 'react';
import Image from 'next/image';
import { MessagesType } from '@/utils/types';
import Link from 'next/link';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

const MessageCard = ({ message }: { message: MessagesType }) => {
	const sender = message.sender;
	const property = message.property;
	const propertyId = property._id;
	const senderId = sender._id;

	return (
		<Link
			href={`/messages/${senderId}/${propertyId}`}
			className='block hover:bg-muted/30 transition rounded-md border p-4 relative md:max-w-[80%] mx-auto'
		>
			{!message.read && (
				<span className='absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-md flex items-center gap-1'>
					New <MdOutlineMarkEmailUnread size={14} />
				</span>
			)}

			<div className='flex items-start gap-4'>
				<Image
					src={sender.profileImage}
					width={40}
					height={40}
					alt={`${sender.firstName} ${sender.lastName}`}
					className='rounded-full object-cover w-10 h-10'
				/>
				<div className='flex-1'>
					<div className='flex justify-between items-center'>
						<h3 className='font-semibold text-sm'>
							{sender.firstName} {sender.lastName}
						</h3>
						<p
							className={`text-xs text-muted-foreground text-right ml-2 whitespace-nowrap ${
								!message.read ? 'mt-5' : 'mt-0'
							}`}
						>
							{new Date(message.createdAt).toLocaleString()}
						</p>
					</div>
					<p className='text-sm text-gray-700 mt-1 line-clamp-1'>
						{message.message.slice(0, 40)}...
					</p>
					<p className='text-xs text-muted-foreground mt-1 italic'>
						Property: {property.name}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default MessageCard;
