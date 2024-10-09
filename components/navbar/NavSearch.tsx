import { Input } from '../ui/input';

const NavSearch = () => {
	return (
		<Input
			type='text'
			placeholder='Find Your Next Vacation...'
			className='max-w-xs dark:bg-muted border border-blue-300'
		/>
	);
};

export default NavSearch;
