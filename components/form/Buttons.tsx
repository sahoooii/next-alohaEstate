'use client';

import { useFormStatus } from 'react-dom';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
	className?: string;
	text?: string;
	size?: btnSize;

};

export const SubmitButton = ({
	className = '',
	text = 'Submit',
	size = 'lg',
}: SubmitButtonProps) => {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			disabled={pending}
			className={`capitalize ${className}`}
			size={size}
		>
			{pending ? (
				<>
					<ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
					Please Wait...
				</>
			) : (
				text
			)}
		</Button>
	);
};

// To handle click favorite button, when not logged in
export const CardSignInButton = () => {
	return (
		<SignInButton mode='modal'>
			<Button
				type='button'
				size='icon'
				variant='outline'
				className='p-2 cursor-pointer'
				asChild
			>
				<FaRegHeart />
			</Button>
		</SignInButton>
	);
};

//To favorite button
export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
	const { pending } = useFormStatus();
	return (
		<Button
			type='submit'
			size='icon'
			variant='outline'
			className='p-2 cursor-pointer'
			disabled={pending}
		>
			{pending ? (
				<ReloadIcon className='animate-spin' />
			) : isFavorite ? (
				<FaHeart className='text-red-600' />
			) : (
				<FaRegHeart />
			)}
		</Button>
	);
};
