import { getFeaturedProperties } from '@/actions/PropertyAction';
import { PropertyCardProps } from '@/utils/types';
import FeaturedPropertyCard from './FeaturedPropertyCard';

const FeaturedProperties = async () => {
	const properties: PropertyCardProps[] = await getFeaturedProperties();

	return properties.length > 0 ? (
		// mb
		<section className='bg-blue-50 px-4 pt-6 pb-14'>
			<div className='container m-auto'>
				<h2 className='text-3xl font-bold font-mono text-blue-500 mb-6 text-center'>
					Featured Properties
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{properties.map((property) => (
						<FeaturedPropertyCard key={property.id} property={property} />
					))}
				</div>
			</div>
		</section>
	) : (
		<div>
			<h2 className='text-3xl font-bold font-mono text-blue-500 mb-6 text-center'>
				FeaturedProperties Coming Soon...
			</h2>
		</div>
	);
};

export default FeaturedProperties;
