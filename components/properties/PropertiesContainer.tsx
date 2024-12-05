import {
	fetchProperties,
	getAllPropertiesCount,
} from '@/actions/PropertyAction';
import type { PropertyCardProps } from '@/utils/types';
import EmptyList from './EmptyList';
import PropertiesList from './PropertiesList';
import PaginationPage from './PaginationPage';

const PropertiesContainer = async ({
	category,
	search,
	// page = '1',
	// pageSize = '8',
}: {
	category?: string;
	search?: string;
	// page: string;
	// pageSize: string;
}) => {
	// const paginationPage = parseInt(page);
	// const paginationPageSize = parseInt(pageSize);

	const properties: PropertyCardProps[] = await fetchProperties({
		category,
		search,
		// page: paginationPage,
		// pageSize: paginationPageSize,
	});

	// const totalProperties = await getAllPropertiesCount();
	// const totalPages = Math.ceil(totalProperties / paginationPageSize);

	// const showPagination = totalProperties > paginationPageSize;

	if (properties.length === 0) {
		return (
			<EmptyList
				heading='No properties.'
				message='Try changing or removing some of your filters'
				btnText='Clear Filters'
			/>
		);
	}

	return (
		<>
			<PropertiesList properties={properties} />
			{/* {showPagination && (
				<PaginationPage
					page={paginationPage}
					totalPages={totalPages}
					linkName='properties'
				/>
			)} */}
		</>
	);
};

export default PropertiesContainer;
