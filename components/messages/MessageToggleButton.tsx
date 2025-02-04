'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { IoLogoWechat } from 'react-icons/io5';
import { MdOutlineReply } from 'react-icons/md';
import { CiCircleCheck } from 'react-icons/ci';

type actionType = 'send' |'reply' | 'replied';

const MessageToggleButton = ({
	actionType,
	children,
}: {
	actionType: actionType;
	children: React.ReactNode;
}) => {
	const [isMessageFormVisible, setIsMessageFormVisible] = useState(false);

	const renderIcon = () => {
		switch (actionType) {
			case 'send':
				return (
					<>
					<IoLogoWechat className='text-gray-200 mr-1' size={24} />
					<h3 className='ml-2 text-lg'>Send A Message</h3>
					<IoLogoWechat className='text-gray-200 ml-1' size={24} />
					</>
				);
			case 'reply':
				return (
					<>
						<MdOutlineReply />
						<h3 className='ml-2 text-md'>Reply Message</h3>
					</>
				);
			case 'replied':
				return (
					<>
						<CiCircleCheck />
						<h3 className='ml-2 text-md'>Replied</h3>
					</>
				);

			default:
				const never: never = actionType;
				throw new Error(`Invalid action type: ${never}`);
		}
	};

	return (
		<div>
			<div className='flex justify-end items-center'>
				<Button
					className=' text-white bg-gray-500 hover:bg-gray-400'
					onClick={() => setIsMessageFormVisible((prev) => !prev)}
				>
					{renderIcon()}
				</Button>
			</div>

			{isMessageFormVisible && <>{children}</>}
		</div>
	);
};

export default MessageToggleButton;
