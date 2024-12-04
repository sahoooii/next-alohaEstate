import Image from 'next/image';
import { PropertyCardProps } from '@/utils/types';
import { FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
import { formatCurrency, isLongSentence } from '@/utils/format';
import PropertyDetails from '../propertyDetails/PropertyDetails';

const RecentPropertyCard = ({ property }: { property: PropertyCardProps }) => {
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

	return (
		<div className='relative rounded-xl shadow-md'>
			<div className='relative h-[300px] mb-2 overflow-hidden'>
				<Image
					src={images[0]}
					alt={name}
					fill
					sizes='(max-width:768px) 100vw, 50vw'
					className='w-full h-auto rounded-t-xl object-cover'
				/>
			</div>

			<div className='p-4'>
				<div className='text-left md:text-center lg:text-left mb-6'>
					<h3 className='text-xl font-bold'>{isLongSentence(30, name)}</h3>
					<p className='text-gray-600'>{isLongSentence(35, tagline)}</p>
				</div>
				
				<h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
					{formatCurrency(price)}
				</h3>

				<PropertyDetails details={details} />
				<div className='border border-gray-100 mb-5' />

				<div className='flex flex-col lg:flex-row justify-between mb-4'>
					<div className='flex align-middle gap-2 mb-4 lg:mb-0 items-center'>
						<FaLocationDot className='text-orange-700' />
						<span className='text-orange-700'> {location.city}</span>
					</div>
					<Link
						href={`/properties/${propertyId}`}
						className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecentPropertyCard;
