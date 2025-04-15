import { Suspense } from 'react';
import { fetchRentalDetails } from '@/actions/MyRentalsAction';
import { redirect } from 'next/navigation';
import { type Amenity } from '@/utils/amenities';
import BreadCrumps from '@/components/propertyDetails/BreadCrumps';
import EditPropertyContainer from '@/components/rentals/EditPropertyContainer';
import { EditPropertyLoadingCard } from '@/components/card/LoadingCards';

const EditRentalPage = async ({ params }: { params: { id: string } }) => {
	const property = await fetchRentalDetails(params.id);
	// console.log(property);
	if (!property) redirect('/');
	const { _id } = property;
	const propertyId = _id.toString();

	const defaultAmenities: Amenity[] = JSON.parse(property.amenities);

	return (
		<section className='container pt-10 pb-28 sm:pb-16 md:pb-32'>
			<div className='mb-4'>
				<h1 className='text-2xl font-mono mb-4 capitalize'>Edit Property</h1>
				<BreadCrumps
					name={property.name}
					link='/rentals'
					title='My Properties'
				/>
			</div>
			<Suspense fallback={<EditPropertyLoadingCard />}>
				<EditPropertyContainer
					property={property}
					propertyId={propertyId}
					defaultAmenities={defaultAmenities}
				/>
			</Suspense>
		</section>
	);
};

export default EditRentalPage;
