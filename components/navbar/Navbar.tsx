import DarkMode from './DarkMode';
import LinksDropDown from './LinksDropDown';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavSearch from './NavSearch';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { MdOutlineNotificationsActive } from 'react-icons/md';

const Navbar = () => {
	const { userId } = auth();
	return (
		<nav className='border-b-1'>
			<div className='px-8 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-6 bg-blue-100'>
				<div className='flex items-center justify-start gap-4 md:gap-6'>
					<Logo />
					<NavLinks />
				</div>
				<NavSearch />
				<div className='flex gap-5 items-center justify-between md:justify-start'>
					<div className='flex gap-4 items-center justify-start'>
						<DarkMode />
						{userId ? (
							<div className='flex items-center'>
								<Link href='/messages' className='relative group'>
									<button
										type='button'
										className='relative rounded-full bg-white p-1 text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400'
									>
										<span className='absolute -right-4 -top-3 bg-blue-400 text-white rounded-full py-[5px] px-[10px] text-xs font-bold'>
											1
										</span>
										<MdOutlineNotificationsActive className='w-6 h-6' />
									</button>
									{/* <UnReadMessageCount session={session} /> */}
								</Link>
							</div>
						) : (
							<></>
						)}
					</div>
					<LinksDropDown />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
