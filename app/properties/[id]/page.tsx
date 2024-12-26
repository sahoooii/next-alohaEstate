import { fetchPropertyDetails } from '@/actions/PropertyAction';
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import PropertyRating from '@/components/card/PropertyRating';
import BookingCalendar from '@/components/propertyDetails/BookingCalendar';
import BreadCrumps from '@/components/propertyDetails/BreadCrumps';
import ImageContainer from '@/components/propertyDetails/ImageContainer';
import PropertyDetails from '@/components/propertyDetails/PropertyDetails';
import ShareButton from '@/components/propertyDetails/ShareButton';
import UserInfo from '@/components/propertyDetails/UserInfo';
import Description from '@/components/propertyDetails/Description';
import { Separator } from '@/components/ui/separator';
import { redirect } from 'next/navigation';
import Amenities from '@/components/propertyDetails/Amenities';
import { FaLocationDot } from 'react-icons/fa6';
import CreateReview from '@/components/reviews/CreateReview';
import PropertyReviews from '@/components/reviews/PropertyReviews';
import { auth } from '@clerk/nextjs/server';
import { findExistingReview } from '@/actions/ReviewsAction';

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
	const property = await fetchPropertyDetails(params.id);

	if (!property) redirect('/');

	const {
		id: propertyId,
		owner,
		name,
		tagline,
		price,
		description,
		images,
		guests,
		bedrooms,
		beds,
		baths,
		amenities,
		location,
	} = property;

	const { street, city } = location;

	const details = { guests, bedrooms, beds, baths };

	const { firstName, lastName, clerkId, email, profileImage } = owner;
	const fullName = `${firstName} ${lastName}`;

	const { userId } = auth();
	const isNotOwner = clerkId !== userId;

	// 1. Not wrote a review yet 2. Logged in 3. Not own property
	const reviewDoesNotExist =
		userId && isNotOwner && !(await findExistingReview(propertyId));

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

			<section className='md:grid md:grid-cols-12 gap-x-12 mt-8 mb-8 lg:mb-14'>
				<div className='md:col-span-8'>
					{/* <div className='flex gap-x-4 items-center'> */}
					<h1 className='text-xl font-bold'>{name}</h1>
					<PropertyRating propertyId={propertyId} inPage />
					{/* </div> */}
					<div className='flex align-middle gap-2 mb-2 items-center'>
						<FaLocationDot className='text-orange-700' />
						<span className='text-orange-700'>
							{street}, {city}
						</span>
					</div>
					<PropertyDetails details={details} />
					<UserInfo profile={{ profileImage, fullName }} />
					<Separator className='mt-4' />
					<Description description={description} />
					<Amenities amenities={amenities} />
				</div>
				<div className='md:col-span-4 flex flex-col items-center mt-4 md:mt-0'>
					<p className='text-lg font-bold text-primary'>${price} / night</p>
					<BookingCalendar />
				</div>
			</section>
			<Separator />
			<section className='mb-20 lg:mb-32'>
				{reviewDoesNotExist && <CreateReview propertyId={propertyId} />}
				<PropertyReviews propertyId={propertyId} />
			</section>
		</div>
	);
};

export default PropertyDetailsPage;
