'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { IoLogoWechat } from 'react-icons/io5';
import MessageForm from './MessageForm';

const MessageFormButton = ({
	ownerId,
	propertyId,
}: {
	ownerId: string;
	propertyId: string;
}) => {
	const [isMessageFormVisible, setIsMessageFormVisible] = useState(false);

	return (
		<div className='mt-4'>
			<div className='flex justify-center items-center'>

				<Button
					className=' text-white hover:bg-blue-300'
					onClick={() => setIsMessageFormVisible((prev) => !prev)}
				>
					<IoLogoWechat className='text-gray-200 mr-1' size={24} />
					<h3 className='ml-2 text-lg'>Send A Message</h3>
					<IoLogoWechat className='text-gray-200 ml-1' size={24} />
				</Button>
			</div>

			{isMessageFormVisible && (
				<MessageForm ownerId={ownerId} propertyId={propertyId} />
			)}
		</div>
	);
};

export default MessageFormButton;
