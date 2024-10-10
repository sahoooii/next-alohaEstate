'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft, LuLogIn } from 'react-icons/lu';
import { IoPersonAddOutline } from 'react-icons/io5';
import Link from 'next/link';
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import SignOutLink from './SignOutLink';
import { navLinks } from '@/utils/navLinks';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

const LinksDropDown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className='flex gap-4 max-w-[100px]'>
					<LuAlignLeft className='w-6 h-6' />
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-44 mr-3' align='start' sideOffset={10}>
				{/* When not login Menu */}
				<SignedOut>
					<DropdownMenuItem>
						<div className='flex items-center '>
							<LuLogIn className='w-6 h-6 mr-3' />
							<SignInButton mode='modal'>
								<button className='w-full text-left'>Login</button>
							</SignInButton>
						</div>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<div className='flex items-center '>
							<IoPersonAddOutline className='w-6 h-6 mr-3' />
							<SignUpButton mode='modal'>
								<button className='w-full text-left'>Register</button>
							</SignUpButton>
						</div>
					</DropdownMenuItem>
				</SignedOut>
				{/* After login Menu */}
				<SignedIn>
					{navLinks.map((link) => {
						return (
							<DropdownMenuItem key={link.href} asChild>
								<Link
									href={link.href}
									className='capitalize w-full cursor-pointer'
								>
									<link.icon className='w-4 h-4 mr-3' />
									{link.label}
								</Link>
							</DropdownMenuItem>
						);
					})}
					<DropdownMenuSeparator />
					<DropdownMenu>
						<SignOutLink />
					</DropdownMenu>
				</SignedIn>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LinksDropDown;
