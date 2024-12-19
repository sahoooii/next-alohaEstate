'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { ReloadIcon } from '@radix-ui/react-icons';

type actionType = 'edit' | 'delete';

const DeleteReviewButton = ({ actionType }: { actionType: actionType }) => {
	const { pending } = useFormStatus();

	const renderIcon = () => {
		switch (actionType) {
			case 'edit':
				return <FaEdit />;
			case 'delete':
				return <FaRegTrashAlt />;

			default:
				const never: never = actionType;
				throw new Error(`Invalid action type: ${never}`);
		}
	};

	return (
		<Button
			type='submit'
			size='icon'
			variant='link'
			className='p-2 cursor-pointer'
		>
			{pending ? <ReloadIcon className='animate-spin' /> : renderIcon()}
		</Button>
	);
};

export default DeleteReviewButton;
