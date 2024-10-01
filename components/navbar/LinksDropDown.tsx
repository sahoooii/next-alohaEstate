'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import SignOutLink from './SignOutLink';
import { navLinks } from '@/utils/navLinks';

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
				{navLinks.map((link) => {
					return (
						<DropdownMenuItem key={link.href} asChild>
							<Link href={link.href} className='capitalize w-full'>
									<link.icon className='w-4 h-4 mr-3' />
									{link.label}
							</Link>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LinksDropDown;
