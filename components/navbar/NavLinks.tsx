'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
	const pathname = usePathname();

	return (
		<div className='flex space-x-2'>
			<Link
				href='/'
				className={`${
					pathname === '/' ? 'bg-blue-500 text-white' : 'text-slate-500'
				} text-white hover:bg-slate-400 hover:text-white rounded-md px-3 py-2`}
			>
				Home
			</Link>
			<Link
				href='/properties'
				className={`${
					pathname === '/properties'
						? 'bg-blue-500 text-white'
						: 'text-slate-500'
				} text-white hover:bg-slate-400 hover:text-white rounded-md px-3 py-2`}
			>
				Properties
			</Link>
		</div>
	);
};

export default NavLinks;
