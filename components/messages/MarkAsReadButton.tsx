'use client';

import { useFormStatus } from 'react-dom';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/context/GlobalContext';
import { CiCircleCheck } from 'react-icons/ci';

export const MarkAsReadButton = () => {
	const { pending } = useFormStatus();
	const { setUnreadCount } = useGlobalContext();

	const handleReadClick = () => {
		setUnreadCount((prevCount: number) => prevCount - 1);
	};

	return (
		<Button
			type='submit'
			disabled={pending}
			className='cursor-pointer'
			size='lg'
			onClick={handleReadClick}
		>
			{pending ? (
				<>
					<ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
					Please Wait...
				</>
			) : (
				<div className='flex items-center gap-1'>
					<CiCircleCheck size={18} /> <p>Mark As Read</p>
				</div>
			)}
		</Button>
	);
};
