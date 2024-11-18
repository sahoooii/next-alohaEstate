import { PropertyCardProps } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaMapMarker } from 'react-icons/fa';

const FeaturedPropertyCard = ({
	property,
}: {
	property: PropertyCardProps;
}) => {
	const { id: propertyId, name, tagline, price, images, location } = property;

	return (
		<div className='bg-white rounded-xl shadow-md relative flex flex-col md:flex-row'>
			<Image
				src={images[0][0]}
				alt={name}
				width={0}
				height={0}
				sizes='100vw'
				className='object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5'
			/>
			<div className='p-6'>
				<h3 className='text-xl font-bold'>{name}</h3>
				<div className='text-gray-600 mb-4'>{tagline}</div>
				<h3 className='absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
					${price} /Night
				</h3>
				<div className='flex justify-center gap-4 text-gray-500 mb-4'>
					{/* <p>
						<FaBed className='inline-block mr-2' /> {property.beds}{' '}
						<span className='md:hidden lg:inline'>Beds</span>
					</p>
					<p>
						<FaBath className='inline-block mr-2' /> {property.baths}{' '}
						<span className='md:hidden lg:inline'>Baths</span>
					</p>
					<p>
						<FaRulerCombined className='inline-block mr-2' />
						{property.square_feet}{' '}
						<span className='md:hidden lg:inline'>sqft</span>
					</p> */}
				</div>

				<div className='border border-gray-200 mb-5'></div>

				<div className='flex flex-col lg:flex-row justify-between'>
					<div className='flex align-middle items-center gap-2 mb-4 lg:mb-0'>
						<FaMapMarker className='text-lg text-orange-700' />
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
