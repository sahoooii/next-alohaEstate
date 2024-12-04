import Image from 'next/image';
import Link from 'next/link';
import { PropertyCardProps } from '@/utils/types';
import { FaLocationDot } from 'react-icons/fa6';
import { formatCurrency, isLongSentence } from '@/utils/format';
import PropertyDetails from '../propertyDetails/PropertyDetails';

const FeaturedPropertyCard = ({
	property,
}: {
	property: PropertyCardProps;
}) => {
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
		<div className='bg-white rounded-xl shadow-md relative flex flex-col lg:flex-row'>
			<Image
				src={images[0][0]}
				alt={name}
				width={0}
				height={0}
				sizes='100vw'
				className='object-cover rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl w-full lg:w-2/5'
			/>
			<div className='p-6'>
				<h3 className='text-xl font-bold'>{isLongSentence(30, tagline)}</h3>
				<p className='text-gray-600'>{isLongSentence(35, tagline)}</p>

				<h3 className='absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right lg:text-right'>
					{formatCurrency(price)} / night
				</h3>

				<PropertyDetails details={details} />
				<div className='border border-gray-200 mb-5' />

				<div className='flex flex-col lg:flex-row justify-between'>
					<div className='flex align-middle items-center gap-2 mb-4 lg:mb-0'>
						<FaLocationDot className='text-lg text-orange-700' />
						<span className='text-orange-700'>{location.city}</span>
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

export default FeaturedPropertyCard;
