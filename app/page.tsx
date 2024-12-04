import Hero from '../components/home/Hero';
import { Suspense } from 'react';
import { FeaturedLoadingCards, RecentLoadingCards } from '@/components/card/LoadingCards';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import RecentProperties from '@/components/home/RecentProperties';

const HomePage = () => {
	return (
		<div>
			<section>
				<Hero />
				<div>
					{/* Make sure later */}
					{/* After create reviews function add Featured Properties */}
					{/* <Suspense fallback={<FeaturedLoadingCards />}>
						<FeaturedProperties />
					</Suspense> */}
					<Suspense fallback={<RecentLoadingCards />}>
						<RecentProperties />
					</Suspense>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
