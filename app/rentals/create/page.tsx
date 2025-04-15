import { Suspense } from 'react';
import CreatePropertiesContainer from '@/components/rentals/CreatePropertiesContainer';
import { CreateLoadingCard } from '@/components/card/LoadingCards';

const CreatePropertyPage = () => {
	return (
		<section className='container py-10 mb-10 md:mb-14'>
			<h1 className='text-2xl font-mono mb-8 capitalize'>create property</h1>
			<div className='border p-4 sm:p-8 rounded'>
				<Suspense fallback={<CreateLoadingCard />}>
					<CreatePropertiesContainer />
				</Suspense>
			</div>
		</section>
	);
};

export default CreatePropertyPage;
