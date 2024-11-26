import React, { Suspense } from 'react';
import PropertiesContainer from '@/components/properties/PropertiesContainer';
import CategoriesList from '@/components/properties/CategoriesList';
import { LoadingCards } from '@/components/card/LoadingCards';
import BreadCrumps from '@/components/properties/BreadCrumps';

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
			<div className='mb-6'>
				<BreadCrumps name='All Properties' link='/' title='Home' />
			</div>
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
