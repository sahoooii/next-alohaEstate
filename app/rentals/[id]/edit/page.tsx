import { Suspense } from 'react';
import EditPropertyContainer from '@/components/rentals/EditPropertyContainer';
import { EditPropertyLoadingCard } from '@/components/card/LoadingCards';

const EditRentalPage = ({ params }: { params: { id: string } }) => {
	return (
		<section className='container pt-10 pb-28 sm:pb-16 md:pb-32'>
			<div className='mb-4'>
				<h1 className='text-2xl font-mono mb-4 capitalize'>Edit Property</h1>
				<Suspense fallback={<EditPropertyLoadingCard />}>
					<EditPropertyContainer id={params.id} />
				</Suspense>
			</div>
		</section>
	);
};

export default EditRentalPage;
