import Image from 'next/image';
import Link from 'next/link';
import PropertyRating from './PropertyRating';
import { PropertyCardProps } from '@/utils/types';
import { formatCurrency } from '@/utils/format';
import { FaBath, FaBed, FaLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import FavoriteToggleButton from './FavoriteToggleButton';

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

	const thumbnail = images[0][0];

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
						{name.length > 30 ? (
							<h3 className='text-xl font-bold'>{name.substring(0, 30)}...</h3>
						) : (
							<h3 className='text-xl font-bold'>{name.substring(0, 30)}</h3>
						)}
						{tagline.length > 35 ? (
							<p className='text-gray-600'>{tagline.substring(0, 35)}...</p>
						) : (
							<p className='text-gray-600'>{tagline.substring(0, 35)}</p>
						)}
					</div>
					<h3 className='absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
						{formatCurrency(price)}
					</h3>
					{/* get quantity */}
					<div className='flex gap-4 text-gray-500 mb-4 items-center'>
						<p>
							<FaPeopleGroup className='inline mr-2'></FaPeopleGroup>
							{guests}{' '}
							<span className='md:hidden lg:inline'>
								{guests <= 1 ? 'Guest' : 'Guests'}
							</span>
						</p>

						<p>
							<FaBed className='inline mr-2'></FaBed> {beds}{' '}
							<span className='md:hidden lg:inline'>
								{beds <= 1 ? 'Bed' : 'Beds'}
							</span>
						</p>
						<p>
							<FaBath className='inline mr-2'></FaBath> {baths}{' '}
							<span className='md:hidden lg:inline'>
								{baths <= 1 ? 'Bath' : 'Baths'}
							</span>
						</p>
					</div>

					<div className='border border-gray-100 mb-5'></div>

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
