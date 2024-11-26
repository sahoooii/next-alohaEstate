import { fetchPropertyDetails } from '@/actions/PropertyAction';
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import BreadCrumps from '@/components/properties/BreadCrumps';
import ShareButton from '@/components/properties/ShareButton';
import { redirect } from 'next/navigation';

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
	const property = await fetchPropertyDetails(params.id);
	// console.log('pop:', property[1]);
	if (!property) redirect('/');

	const {
		id: propertyId,
		name,
		tagline,
		price,
		category,
		description,
		images,
		guests,
		bedrooms,
		beds,
		baths,
		amenities,
	} = property[0];

	const { firstName, lastName, username, email, profileImages } = property[1];

	return (
		<section className='container mt-8'>
			<BreadCrumps name={name} link='/properties' title='All Properties' />
			<header className='flex justify-between items-center mt-4'>
				<h1 className='text-4xl font-bold capitalize'>{name}</h1>
				<div className='flex items-center gap-x-4'>
					<ShareButton name={name} propertyId={propertyId} />
					<FavoriteToggleButton propertyId={propertyId} />
				</div>
			</header>
			<h3 className='py-3 text-xl text-gray-500 capitalize'>{tagline}</h3>
		</section>
	);
};

export default PropertyDetailsPage;
