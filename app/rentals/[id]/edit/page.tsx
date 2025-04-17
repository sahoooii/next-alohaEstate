import EditPropertyContainer from '@/components/rentals/EditPropertyContainer';

const EditRentalPage = async ({ params }: { params: { id: string } }) => {
	return (
		<section className='container pt-10 pb-28 sm:pb-16 md:pb-32'>
			<div className='mb-4'>
				<h1 className='text-2xl font-mono mb-4 capitalize'>Edit Property</h1>
				<EditPropertyContainer id={params.id} />
			</div>
		</section>
	);
};

export default EditRentalPage;
