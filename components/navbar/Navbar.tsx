import Logo from './Logo';
import NavLinks from './NavLinks';
import NavSearch from './NavSearch';
import Link from 'next/link';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { fetchProfileImage } from '@/actions/ProfileActions';
import { auth } from '@clerk/nextjs/server';
import DarkModeWrapper from './DarkModeWrapper';
import UnreadMessageCountWrapper from './UnreadMessageCountWrapper';
import LinksDropdownWrapper from './LinksDropdownWrapper';

const Navbar = async () => {
	const { userId } = auth();

	const profileImage = await fetchProfileImage();

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
						<DarkModeWrapper />
						{userId ? (
							<div className='flex items-center'>
								<Link href='/messages' className='relative group'>
									<button
										type='button'
										className='relative rounded-full bg-white p-1 text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400'
									>
										<UnreadMessageCountWrapper />
										<MdOutlineNotificationsActive className='w-6 h-6' />
									</button>
								</Link>
							</div>
						) : (
							<></>
						)}
					</div>
					<LinksDropdownWrapper profileImage={profileImage} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
