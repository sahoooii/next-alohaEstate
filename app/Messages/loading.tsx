'use client';

import { MessageLoadingCard } from '@/components/card/LoadingCards';

const loading = () => {
	return (
		<section className='container grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
			<MessageLoadingCard />
			<MessageLoadingCard />
			<MessageLoadingCard />
		</section>
	);
};

export default loading;
