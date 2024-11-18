import FeaturedProperties from '@/components/home/FeaturedProperties';
import Hero from '../components/home/Hero';
import { Suspense } from 'react';
import LoadingCards from '@/components/card/LoadingCards';

const HomePage = ({
	searchParams,
}: {
	searchParams: { category?: string; search?: string };
}) => {
	return (
		<div>
			<section>
				<Hero />
				<div>
					<FeaturedProperties />
						{/* Recent Properties */}
					{/* <Suspense fallback={<LoadingCards />}>
					</Suspense> */}
				</div>
			</section>
		</div>
	);
};

export default HomePage;
