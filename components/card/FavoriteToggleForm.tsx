'use client';

import { usePathname } from 'next/navigation';
import FormContainer from '../form/FormContainer';
import { toggleFavoriteAction } from '@/actions/PropertyAction';
import { CardSubmitButton } from '../form/Buttons';

type FavoriteToggleFormProps = {
	propertyId: string;
	favoriteId: string | null;
};

const FavoriteToggleForm = ({
	propertyId,
	favoriteId,
}: FavoriteToggleFormProps) => {
	// To get where are we. ex: HomePage, propertyPage...
	const pathname = usePathname();

	const toggleAction = toggleFavoriteAction.bind(null, {
		propertyId,
		favoriteId,
		pathname,
	});

	return (
		<FormContainer action={toggleAction}>
			<CardSubmitButton isFavorite={favoriteId ? true : false} />
		</FormContainer>
	);
};

export default FavoriteToggleForm;
