import Image from 'next/image';
import { PropertyCardProps } from '@/utils/types';
import { FaBath, FaBed, FaLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import Link from 'next/link';

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

	return (
		<div className='rounded-xl shadow-md relative'>
			<Image
				src={images[0][0]}
				alt={name}
				width={0}
				height={0}
				sizes='100vw'
				className='w-full h-auto rounded-t-xl'
			/>
			<div className='p-4'>
				<div className='text-left md:text-center lg:text-left mb-6'>
					<h3 className='text-xl font-bold'>{property.name}</h3>
					<p className='text-gray-600'>{tagline}</p>
				</div>
				<h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
					${price}
				</h3>

				<div className='flex justify-center gap-4 text-gray-500 mb-4 items-center'>
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
							{baths <= 1 ? 'Bath' : 'Bath'}
						</span>
					</p>
				</div>

				<div className='border border-gray-100 mb-5'></div>

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
