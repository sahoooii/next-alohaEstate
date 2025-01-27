import { formatQuantity } from '@/utils/format';
import { FaBath, FaBed, FaPeopleGroup } from 'react-icons/fa6';
import { MdBedroomChild } from 'react-icons/md';

type PropertyDetailsProps = {
	details: {
		bedrooms?: number;
		baths: number;
		guests: number;
		beds: number;
	};
};

const PropertyDetails = ({
	details: { bedrooms, baths, guests, beds },
}: PropertyDetailsProps) => {
	return (
		<div className='flex gap-2 text-gray-500 mb-4 items-center'>
			<FaPeopleGroup className='inline md:hidden lg:inline' />
			<span className='lg:inline'>{formatQuantity(guests, 'guest')} </span>
			<FaBed className='inline md:hidden lg:inline' />
			<span className='lg:inline'>{formatQuantity(beds, 'bed')} </span>
			<FaBath className='inline md:hidden lg:inline' />
			<span className='lg:inline'>{formatQuantity(baths, 'bath')} </span>
			{bedrooms !== 0 && bedrooms && (
				<>
					<MdBedroomChild className='inline' />
					<span className='lg:inline'>
						{formatQuantity(bedrooms, 'bedroom')}{' '}
					</span>
				</>
			)}
		</div>
	);
};

export default PropertyDetails;
