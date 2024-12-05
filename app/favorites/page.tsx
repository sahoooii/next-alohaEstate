import { fetchFavorites, getAllFavorites } from '@/actions/PropertyAction';
import EmptyList from '@/components/properties/EmptyList';
import PropertiesList from '@/components/properties/PropertiesList';
import PaginationPage from '@/components/properties/PaginationPage';

const FavoritesPage = async ({
	searchParams,
}: // pageSize = '8',
{
	searchParams: {
		page: string;
	};
	// pageSize: string;
}) => {
	const paginationPage =
		searchParams.page === undefined ? 1 : parseInt(searchParams.page);

	const pageSize = '2';
	const paginationPageSize = parseInt(pageSize);

	const favorites = await fetchFavorites({
		page: paginationPage,
		pageSize: paginationPageSize,
	});

	const totalFavorites = await getAllFavorites();
	const totalPages = Math.ceil(totalFavorites / paginationPageSize);

	const showPagination = totalFavorites > paginationPageSize;

	if (favorites.length === 0) {
		return (
			<div className='mt-8'>
				<EmptyList
					heading='No favorite properties.'
					message='Try find your favorite one'
					btnText='HOME'
				/>
			</div>
		);
	}

	return (
		<div className='container pt-10 pb-28 sm:pb-16 md:pb-32'>
			<h1 className='text-2xl font-mono mb-8 capitalize'>Your favorites</h1>
			<PropertiesList properties={favorites} />
			{showPagination && (
				<PaginationPage
					page={paginationPage}
					totalPages={totalPages}
					linkName='favorites'
				/>
			)}
		</div>
	);
};

export default FavoritesPage;
