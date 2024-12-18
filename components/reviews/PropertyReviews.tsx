import Title from '@/components/propertyDetails/Title';
import { fetchPropertyReviews } from '@/actions/ReviewsAction';
import ReviewCardAtDetailsPage from './ReviewCardAtDetailsPage';

type Reviews = {
	profileId: string;
	name: string;
	profileImage: string;
	rating: number;
	comment: string;
	_id: string;
	createdAt: Date;
};

const PropertyReviews = async ({ propertyId }: { propertyId: string }) => {
	const reviewsData = await fetchPropertyReviews(propertyId);

	const reviews: Reviews[] = reviewsData.reviews;

	if (reviews.length < 1) return null;

	return (
		<div className='mt-8'>
			<Title text='Reviews' />
			<div className='grid md:grid-cols-2 gap-8 mt-4'>
				{reviews.map((review) => {
					return <ReviewCardAtDetailsPage key={review._id} reviewInfo={review} />;
				})}
			</div>
		</div>
	);
};

export default PropertyReviews;
