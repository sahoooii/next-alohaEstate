import { fetchFavorites } from '@/actions/PropertyAction';
import EmptyList from '@/components/home/EmptyList';
import PropertiesList from '@/components/home/PropertiesList';

const FavoritesPage = async () => {
	const favorites = await fetchFavorites();

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
		</div>
	);
};

export default FavoritesPage;
