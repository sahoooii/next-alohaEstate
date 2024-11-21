import { getRecentProperties } from '@/actions/PropertyAction';
import { PropertyCardProps } from '@/utils/types';
import RecentPropertyCard from './RecentPropertyCard';
import Link from 'next/link';
import EmptyList from '../properties/EmptyList';

const RecentProperties = async () => {
	const properties: PropertyCardProps[] = await getRecentProperties();

	return (
		<div className='sm:mb-24 mb-6'>
			<section className='px-4 pt-8 pb-6 mb-6'>
				<div className='container m-auto'>
					<h2 className='text-3xl font-bold font-mono text-blue-500 mb-6 text-center'>
						Recent Properties
					</h2>
					{properties.length === 0 ? (
						<EmptyList
							heading='This Contents Coming Soon...'
							message='We are working on it!'
							btnText='Go Top'
						/>
					) : (
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{properties.map((property) => (
								<RecentPropertyCard key={property.id} property={property} />
							))}
						</div>
					)}
				</div>
			</section>
			<section className='m-auto max-w-lg mt-5 mb-14 sm:mb-20 px-6'>
				<Link
					href='/properties'
					className='block bg-primary text-white text-center py-4 px-6 rounded-xl hover:bg-blue-400'
				>
					View All Properties
				</Link>
			</section>
		</div>
	);
};

export default RecentProperties;
