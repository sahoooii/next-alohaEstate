import { fetchPropertyDetails } from '@/actions/PropertyAction';
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import PropertyRating from '@/components/card/PropertyRating';
import BookingCalendar from '@/components/propertyDetails/BookingCalendar';
import BreadCrumps from '@/components/propertyDetails/BreadCrumps';
import ImageContainer from '@/components/propertyDetails/ImageContainer';
import PropertyDetails from '@/components/propertyDetails/PropertyDetails';
import ShareButton from '@/components/propertyDetails/ShareButton';
import { redirect } from 'next/navigation';

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
	const property = await fetchPropertyDetails(params.id);

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

	const details = { guests, bedrooms, beds, baths };

	const { firstName, lastName, username, email, profileImages } = property[1];

	return (
		<div className='container mt-8'>
			<section>
				<BreadCrumps name={name} link='/properties' title='All Properties' />
				<header className='flex justify-between items-center mt-4'>
					<h1 className='text-4xl font-bold capitalize'>{name}</h1>
					<div className='flex items-center gap-x-4'>
						<ShareButton name={name} propertyId={propertyId} />
						<FavoriteToggleButton propertyId={propertyId} />
					</div>
				</header>
				<h3 className='py-3 text-xl text-gray-500 capitalize'>{tagline}</h3>
				<ImageContainer images={images} name={name} />
			</section>
			<section className='lg:grid lg:grid-cols-12 gap-x-12 mt-8 mb-20'>
				<div className='lg:col-span-8'>
					<div className='flex gap-x-4 items-center'>
						<h1 className='text-xl font-bold'>{name}</h1>
						<PropertyRating propertyId={propertyId} inPage />
					</div>
					<PropertyDetails details={details} />
				</div>
				<div className='lg:col-span-4 flex flex-col items-center'>
					<BookingCalendar />
				</div>
			</section>
		</div>
	);
};

export default PropertyDetailsPage;
