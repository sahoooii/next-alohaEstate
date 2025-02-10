'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/context/GlobalContext';
import { FaRegTrashAlt } from 'react-icons/fa';

export const DeleteMessageButton = ({
	isReadMessage,
}: {
	isReadMessage: boolean;
}) => {
	const { pending } = useFormStatus();
	const [isRead, setIsRead] = useState(isReadMessage);

	const { setUnreadCount } = useGlobalContext();

	const handleDeleteClick = () => {
		setUnreadCount((prevCount: number) => (isRead ? prevCount : prevCount - 1));
		setIsRead(isRead);
	};

	return (
		<Button
			type='submit'
			disabled={pending}
			className='cursor-pointer bg-transparent text-primary shadow-none hover:bg-transparent hover:text-blue-400'
			size='icon'
			onClick={handleDeleteClick}
		>
			{pending ? (
				<ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
			) : (
				<FaRegTrashAlt />
			)}
		</Button>
	);
};
