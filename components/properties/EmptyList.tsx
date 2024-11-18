import Link from 'next/link';
import { Button } from '../ui/button';

const EmptyList = ({
	heading = 'No properties in the list.',
	message = 'Try search another keyword',
	btnText = 'back home',
}: {
	heading?: string;
	message?: string;
	btnText?: string;
}) => {
	return (
		<div className='container mt-4'>
			<h2 className='text-xl font-bold'>{heading}</h2>
			<p className='text-lg'>{message}</p>
			<Button asChild className='mt-4 capitalize' size='lg'>
				<Link href='/'>{btnText}</Link>
			</Button>
		</div>
	);
};

export default EmptyList;
