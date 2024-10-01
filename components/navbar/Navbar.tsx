import DarkMode from './DarkMode';
import LinksDropDown from './LinksDropDown';
import Logo from './Logo';
import NavSearch from './NavSearch';

const Navbar = () => {
	return (
		<nav className='border-b-2'>
			<div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-6'>
				<Logo />
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
