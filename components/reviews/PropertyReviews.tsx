import Title from '@/components/propertyDetails/Title';
import { fetchPropertyReviews } from '@/actions/ReviewsAction';
import ReviewCardAtDetailsPage from './ReviewCardAtDetailsPage';
import { Reviews } from '@/utils/types';
import { formatQuantity } from '@/utils/format';

const PropertyReviews = async ({ propertyId }: { propertyId: string }) => {
	const reviewsData = await fetchPropertyReviews(propertyId);

	const reviews: Reviews[] = reviewsData.reviews;

	if (reviews.length < 1) return null;

	return (
		<div className='mt-8'>
			<Title text={formatQuantity(reviews.length, 'Review')} />
			<div className='grid md:grid-cols-2 gap-6 mt-4'>
				{reviews.map((review) => {
					return <ReviewCardAtDetailsPage key={review._id} reviews={review} />;
				})}
			</div>
		</div>
	);
};

export default PropertyReviews;
