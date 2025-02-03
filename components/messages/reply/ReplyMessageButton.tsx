'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ReplyMessageForm from './ReplyMessageForm';
import { MdOutlineReply } from 'react-icons/md';
import { ReplyMessageProps } from '@/utils/types';

const ReplyMessageButton = ({ replayMessage }: ReplyMessageProps) => {
	const [isMessageFormVisible, setIsMessageFormVisible] = useState(false);

	return (
		<div>
			<div className='flex justify-center items-center'>
				<Button
					className=' text-white bg-gray-500 hover:bg-gray-400'
					onClick={() => setIsMessageFormVisible((prev) => !prev)}
				>
					<MdOutlineReply className='text-gray-200 mr-1' size={24} />
					<h3 className='ml-2 text-md'>Reply Message</h3>
				</Button>
			</div>

			{isMessageFormVisible && (
				<ReplyMessageForm replayMessage={replayMessage} />
			)}
		</div>
	);
};

export default ReplyMessageButton;
