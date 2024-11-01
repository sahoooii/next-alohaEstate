import { fetchProperties } from '@/actions/PropertyAction';
import PropertiesList from './PropertiesList';
import EmptyList from './EmptyList';
import type { PropertyCardProps } from '@/utils/types';

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
	// console.log('property:', properties);

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
		<div>
			<PropertiesList properties={properties} />
		</div>
	);
};

export default PropertiesContainer;
