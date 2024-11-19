import Hero from '../components/home/Hero';
import { Suspense } from 'react';
import LoadingCards from '@/components/card/LoadingCards';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import RecentProperties from '@/components/home/RecentProperties';

const HomePage = () => {
	return (
		<div>
			<section>
				<Hero />
				<div>
					<FeaturedProperties />
					<RecentProperties />
					{/* <Suspense fallback={<LoadingCards />}>
					</Suspense> */}
				</div>
			</section>
		</div>
	);
};

export default HomePage;
