import { getTopRatedProperties } from '@/actions/PropertyAction';
import { PropertyCardProps } from '@/utils/types';
import FeaturedPropertyCard from './FeaturedPropertyCard';
import EmptyList from '../properties/EmptyList';

const FeaturedProperties = async () => {
	const properties: PropertyCardProps[] = await getTopRatedProperties();

	if (properties.length === 0) {
		return (
			<EmptyList
				heading='Featured Properties Coming Soon...'
				message='We are working on it!'
				btnText='Go Top'
			/>
		);
	}

	return (
		<section className='bg-blue-50 px-4 pt-6 pb-14'>
			<div className='container m-auto'>
				<h2 className='text-3xl font-bold font-mono text-blue-500 mb-6 text-center'>
					Guest Favorite
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{properties.map((property) => (
						<FeaturedPropertyCard key={property.id} property={property} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProperties;
