'use client';

import { MessageLoadingCard } from '@/components/card/LoadingCards';

const loading = () => {
	return (
		<section className='container mt-12'>
			<MessageLoadingCard />
			<MessageLoadingCard />
			<MessageLoadingCard />
		</section>
	);
};

export default loading;
