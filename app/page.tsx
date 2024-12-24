import Hero from '../components/home/Hero';
import { Suspense } from 'react';
import {
	FeaturedLoadingCards,
	RecentLoadingCards,
} from '@/components/card/LoadingCards';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import RecentProperties from '@/components/home/RecentProperties';

const HomePage = () => {
	return (
		<div>
			<section>
				<Hero />
				<div className='mb-24'>
					<Suspense fallback={<FeaturedLoadingCards />}>
						<FeaturedProperties />
					</Suspense>
					<Suspense fallback={<RecentLoadingCards />}>
						<RecentProperties />
					</Suspense>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
