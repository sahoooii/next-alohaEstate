'use client';

import { useFormStatus } from 'react-dom';
import { FaEdit } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Button } from '../ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';

type actionType = 'edit' | 'delete';

const ReviewIconButton = ({
	actionType,
}: {
	actionType: actionType;
}) => {
	const { pending } = useFormStatus();

	const renderIcon = () => {
		switch (actionType) {
			case 'edit':
				return <FaEdit />;
			case 'delete':
				return <FaRegTrashCan />;
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

export default ReviewIconButton;
