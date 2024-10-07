'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';
import { MdLogout } from 'react-icons/md';

const SignOutLink = () => {
	const { toast } = useToast();
	const handleLogout = () => {
		toast({ description: 'You have been signed out.' });
	};
	return (
		// Icon size
		<SignOutButton redirectUrl='/'>
			<button
				className='w-full text-left flex items-center'
				onClick={handleLogout}
			>
				<MdLogout className='mr-3 w-4 h-4' />
				Logout
			</button>
		</SignOutButton>
	);
};

export default SignOutLink;
