import { fetchProperties } from '@/actions/PropertyAction';
import type { PropertyCardProps } from '@/utils/types';
import EmptyList from './EmptyList';
import PropertiesList from './PropertiesList';

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
			<EmptyList
				heading='No properties.'
				message='Try changing or removing some of your filters'
				btnText='Clear Filters'
			/>
		);
	}

	return <PropertiesList properties={properties} />;
};

export default PropertiesContainer;
