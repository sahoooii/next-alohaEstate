import { fetchProperties } from '@/actions/PropertyAction';
import type { PropertyCardProps } from '@/utils/types';
import EmptyList from './EmptyList';
import PropertyCard from '../card/PropertyCard';

const PropertiesContainer = async ({
	category,
	search,
}: {
	category?: string;
	search?: string;
}) => {
	const properties: PropertyCardProps[] = await fetchProperties({
		category,
		search,
	});

	if (properties.length === 0) {
		return (
			<div>
				<EmptyList
					heading='No properties.'
					message='Try changing or removing some of your filters'
					btnText='Clear Filters'
				/>
			</div>
		);
	}

	return (
		<section className='mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{properties.map((property) => (
				<PropertyCard key={property.id} property={property} />
			))}
		</section>
	);
};

export default PropertiesContainer;
