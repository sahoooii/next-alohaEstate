import { auth } from '@clerk/nextjs/server';
import { fetchFavoriteId } from '@/actions/PropertyAction';
import FavoriteToggleForm from './FavoriteToggleForm';
import { CardSignInButton } from '../form/Buttons';

const FavoriteToggleButton = async ({ propertyId }: { propertyId: string }) => {
	const { userId } = auth();
	// Html error occurred
	if (!userId) return <CardSignInButton />;

	const favoriteId = await fetchFavoriteId({ propertyId });

	return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
};

export default FavoriteToggleButton;
