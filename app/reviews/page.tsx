import EmptyList from '@/components/properties/EmptyList';
import Title from '@/components/propertyDetails/Title';
import ReviewCard from '@/components/reviews/ReviewCard';
import {
	deleteReviewAction,
	fetchPropertyReviewsByUser,
} from '@/actions/ReviewsAction';
import DeleteReviewButton from '@/components/reviews/DeleteReviewButton';
import FormContainer from '@/components/form/FormContainer';

const ReviewsPage = async () => {
	const reviews = await fetchPropertyReviewsByUser();

	if (reviews.length === 0)
		return (
			<EmptyList heading='No reviews in your list' message='Write a review' />
		);

	return (
		<div className='container mt-8 mb-20'>
			<Title
				text={`You wrote ${reviews.length} ${
					reviews.length === 1 ? 'review' : 'reviews'
				}`}
			/>
			<section className='grid md:grid-cols-2 gap-8 mt-4'>
				{reviews.map((review) => {
					const { name, _id } = review;
					const {
						_id: reviewId,
						comment,
						rating,
						name: profileName,
						profileImage,
					} = review.reviews;

					const reviewInfo = {
						_id,
						name,
						reviewId,
						comment,
						rating,
						profileName,
						profileImage,
					};

					return (
						<ReviewCard key={reviewId} reviewInfo={reviewInfo}>
							<DeleteReview
								reviewId={reviewId.toString()}
								propertyId={_id.toString()}
							/>
						</ReviewCard>
					);
				})}
			</section>
		</div>
	);
};

const DeleteReview = ({
	reviewId,
	propertyId,
}: {
	reviewId: string;
	propertyId: string;
}) => {
	const deleteReview = deleteReviewAction.bind(null, { reviewId, propertyId });

	return (
		<FormContainer action={deleteReview}>
			<DeleteReviewButton actionType='delete' />
		</FormContainer>
	);
};

export default ReviewsPage;
