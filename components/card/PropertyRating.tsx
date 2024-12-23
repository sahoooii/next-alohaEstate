import { fetchPropertyRating } from '@/actions/ReviewsAction';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const PropertyRating = async ({
	propertyId,
	inPage,
}: {
	propertyId: string;
	inPage: boolean;
}) => {
	const { numReviews, averageRating } = await fetchPropertyRating(propertyId);
	const stars = Array.from({ length: 5 }, (_, i) => {
		if (i + 1 <= averageRating) {
			return <FaStar key={i} className='w-3 h-3 text-primary' />;
		}
		if (i + 0.5 <= averageRating) {
			return <FaStarHalfAlt key={i} className='w-3 h-3 text-primary' />;
		} else {
			return <FaRegStar key={i} className='w-3 h-3 text-primary' />;
		}
	});

	const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-sm'}`;
	const countText = numReviews > 1 ? 'Reviews' : 'Review';
	const countValue = `(${numReviews}) ${inPage ? countText : ''}`;

	if (numReviews === 0 || averageRating === 0) {
		return null;
	}
	return (
		<span className={className}>
			{averageRating} {stars} {countValue}
		</span>
	);
};

export default PropertyRating;
