import Image from 'next/image';
import Link from 'next/link';
import PropertyRating from './PropertyRating';
import { PropertyCardProps } from '@/utils/types';
import { formatCurrency, isLongSentence } from '@/utils/format';
import { FaLocationDot } from 'react-icons/fa6';
import FavoriteToggleButton from './FavoriteToggleButton';
import PropertyDetails from '../propertyDetails/PropertyDetails';

const PropertyCard = ({ property }: { property: PropertyCardProps }) => {
	const {
		id: propertyId,
		name,
		tagline,
		price,
		images,
		location,
		guests,
		beds,
		baths,
	} = property;

	const details = { guests, beds, baths };
	const thumbnail = images[0];

	return (
		<article className='group relative rounded-xl shadow-md'>
			<Link href={`/properties/${propertyId}`}>
				<div className='relative h-[300px] mb-2 overflow-hidden rounded-t-xl'>
					<Image
						src={thumbnail}
						fill
						sizes='(max-width:768px) 100vw, 50vw'
						alt={name}
						className='rounded-t-xl object-cover transform group-hover:scale-110 transition-transform duration-500'
					/>
				</div>
				<div className='p-4'>
					<div className='text-left mb-6'>
						<h3 className='text-xl font-bold'>{isLongSentence(30, name)}</h3>
						<p className='text-gray-600'>{isLongSentence(35, tagline)}</p>
					</div>
					
					<h3 className='absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
						{formatCurrency(price)}
					</h3>

					<PropertyDetails details={details} />
					<div className='border border-gray-100 mb-5' />

					<div className='flex flex-row justify-between mb-4  align-middle'>
						<div className='flex align-middle gap-2 mb-0 items-center'>
							<FaLocationDot className='text-orange-700' />
							<span className='text-orange-700'> {location.city}</span>
						</div>
						<PropertyRating inPage={false} propertyId={propertyId} />
					</div>
				</div>
			</Link>
			<div className='absolute top-5 right-5 z-5'>
				<FavoriteToggleButton propertyId={propertyId} />
			</div>
		</article>
	);
};

export default PropertyCard;
