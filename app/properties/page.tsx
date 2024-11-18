import React, { Suspense } from 'react';
import LoadingCards from '@/components/card/LoadingCards';
import PropertiesContainer from '@/components/properties/PropertiesContainer';
import CategoriesList from '@/components/properties/CategoriesList';

const PropertiesPage = ({
	searchParams,
	pageSize,
}: {
	searchParams: {
		category?: string;
		search?: string;
		page: string;
	};
	pageSize: string;
}) => {
	return (
		<div className='container py-8 mb-20'>
			<CategoriesList
				category={searchParams.category}
				search={searchParams.search}
			/>
			<Suspense fallback={<LoadingCards />}>
				<PropertiesContainer
					category={searchParams.category}
					search={searchParams.search}
					page={searchParams.page}
					pageSize={pageSize}
				/>
			</Suspense>
		</div>
	);
};

export default PropertiesPage;
