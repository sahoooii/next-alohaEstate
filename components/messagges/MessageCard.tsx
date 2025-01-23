import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { IoLogoWechat } from 'react-icons/io5';
import Image from 'next/image';
import { MessagesType } from '@/utils/types';
import Link from 'next/link';

const MessageCard = ({ message }: { message: MessagesType }) => {
	// const { name } = message.property;
	// console.log(message?.property?.name);
	// Add pagination
	return (
		// <div className='flex flex-col lg:flex-row'>
		<Card className='relative p-1 rounded-md shadow-md'>
			<div className='absolute top-2 right-2 bg-yellow-600 text-white px-2 py-1 rounded-md'>
				New
			</div>
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
						<Link href={`/properties/${message.property._id}`}>
							<h3 className='text-base font-bold capitalize mb-1 underline'>
								{message.property.name}
							</h3>
						</Link>
						<h3 className='text-base font-bold capitalize mb-1 text-muted-foreground'>
							From: {message.sender.firstName} {message.sender.lastName}
						</h3>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				{/* format long sentence */}
				<div className='mb-4 py-4 px-2 bg-white rounded-xl shadow-md flex items-center gap-2'>
					<IoLogoWechat className='text-primary mr-1' size={24} />
					<p className='text-gray-700'>{message.message}</p>
				</div>

				<div className='gap-y-1'>
					<ul>
						<li>
							<strong>Reply Email:</strong>{' '}
							<a href={`mailto:${message.email}`} className='text-blue-500'>
								{message.email}
							</a>
						</li>
						<li>
							{/* format Date */}
							<strong>Received:</strong>{' '}
							{new Date(message.createdAt).toLocaleString()}
						</li>
					</ul>
				</div>
			</CardContent>
			<CardFooter>
				<button className='mt-4 mr-3'>
					{/* {isRead ? 'Mark As New' : 'Mark As Read'} */}
				</button>
				<button
					// onClick={handleDeleteClick}
					className='mt-4 bg-red-500 text-white py-1 px-3 rounded-md'
				>
					Delete
				</button>
			</CardFooter>
		</Card>
		// </div>
	);
};

export default MessageCard;
