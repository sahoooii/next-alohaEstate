import Image from 'next/image';
import Link from 'next/link';
import PropertyRating from './PropertyRating';
import { PropertyCardProps } from '@/utils/types';
import { formatCurrency } from '@/utils/format';
import { FaLocationDot } from 'react-icons/fa6';
import FavoriteToggleButton from './FavoriteToggleButton';

const PropertyCard = ({ property }: { property: PropertyCardProps }) => {
	const { id: propertyId, name, tagline, price, images, location } = property;
	const thumbnail = images[0][0];
	// console.log(location);
	const { city } = location;
	return (
		<article className='group relative'>
			<Link href={`/properties/${propertyId}`}>
				<div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
					<Image
						src={thumbnail}
						fill
						sizes='(max-width:768px) 100vw, 50vw'
						alt={name}
						className='rounded object-cover transform group-hover:scale-110 transition-transform duration-500'
					/>
				</div>
				<div className='flex justify-between items-center'>
					<h3 className='text-base font-semibold mt-1'>
						{name.substring(0, 30)}
					</h3>
					<PropertyRating inPage={false} propertyId={propertyId} />
				</div>
				<p className='text-sm text-muted-foreground mt-1'>
					{tagline.substring(0, 40)}
				</p>
				<div className='flex justify-between items-center mt-1'>
					<p className='text-sm mt-1'>
						<span className='font-semibold'>{formatCurrency(price)} </span>
						Night
					</p>
					<p className='text-sm flex items-center'>
						<FaLocationDot className='mr-1 w-3 h-3' />
						{city}
					</p>
				</div>
			</Link>
			<div className='absolute top-5 right-5 z-5'>
				<FavoriteToggleButton propertyId={propertyId} />
			</div>
		</article>
	);
};

export default PropertyCard;
