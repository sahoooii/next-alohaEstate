import Link from 'next/link';
import { LuPalmtree } from 'react-icons/lu';
import { Button } from '../ui/button';

const Logo = () => {
	return (
		<Button size='icon' asChild>
			<Link href='/'>
				<LuPalmtree className='w-6 h-6' />
			</Link>
		</Button>
	);
};

export default Logo;
