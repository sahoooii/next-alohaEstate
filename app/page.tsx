import Hero from '../components/home/Hero';
import { Suspense } from 'react';

const HomePage = ({
	searchParams,
}: {
	searchParams: { category?: string; search?: string };
}) => {
	return (
		<div>
			<section>
				<Hero />
				<div className='container py-8 mb-20'>
					{/* Add later, after create data */}
					{/* Featured Properties */}
					{/* Recent Properties */}
				</div>
			</section>
		</div>
	);
};

export default HomePage;
