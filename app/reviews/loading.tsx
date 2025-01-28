'use client';

import { ReviewLoadingCard } from '@/components/card/LoadingCards';

const loading = () => {
	return (
		<section className='container grid md:grid-cols-2 gap-8 mt-12'>
			<ReviewLoadingCard />
			<ReviewLoadingCard />
			<ReviewLoadingCard />
			<ReviewLoadingCard />
		</section>
	);
};

export default loading;
