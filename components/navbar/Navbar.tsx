import DarkMode from './DarkMode';
import LinksDropDown from './LinksDropDown';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavSearch from './NavSearch';

const Navbar = () => {
	return (
		<nav className='border-b-1'>
			<div className='px-8 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-6 bg-blue-100'>
				<div className='flex items-center justify-start gap-4 md:gap-6'>
					<Logo />
					<NavLinks />
				</div>
				<NavSearch />
				<div className='flex gap-4 items-center justify-between md:justify-start'>
					<DarkMode />
					<LinksDropDown />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
