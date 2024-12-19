import EmptyList from '@/components/properties/EmptyList';
import ReviewCard from '@/components/reviews/ReviewCard';
import {
	fetchAllReviewsByUser,
	fetchPropertyReviewsByUser,
} from '@/actions/ReviewsAction';
import PaginationPage from '@/components/properties/PaginationPage';
import DeleteReview from '@/components/reviews/DeleteReview';
import { Card } from '@/components/ui/card';

const ReviewsPage = async ({
	searchParams,
}: {
	searchParams: {
		page: string;
	};
}) => {
	const paginationPage =
		searchParams.page === undefined ? 1 : parseInt(searchParams.page);

	const pageSize = '8';
	const paginationPageSize = parseInt(pageSize);

	const reviews = await fetchPropertyReviewsByUser({
		page: paginationPage,
		pageSize: paginationPageSize,
	});
	const totalReviews = await fetchAllReviewsByUser();
	const totalPages = Math.ceil(totalReviews / paginationPageSize);

	const showPagination = totalReviews > paginationPageSize;

	if (reviews.length === 0)
		return (
			<EmptyList heading='No reviews in your list' message='Write a review' />
		);

	return (
		<div className='container mt-8'>
			<h1 className='text-2xl font-mono mb-8 capitalize'>
				{`You wrote ${totalReviews} ${
					totalReviews === 1 ? 'Review' : 'Reviews'
				}`}
			</h1>
			<section className='grid md:grid-cols-2 gap-8 mt-4'>
				{reviews.map((review) => {
					const { name, _id: propertyId, images } = review;
					const propertyImage = images[0];

					const {
						_id: reviewId,
						comment,
						rating,
						name: profileName,
						profileImage,
						createdAt,
					} = review.reviews;

					const createdDate = createdAt.toString().substring(0, 15);

					const reviewInfo = {
						propertyId,
						name,
						propertyImage,
						reviewId,
						comment,
						rating,
						profileName,
						profileImage,
						createdDate,
					};

					return (
						<ReviewCard key={reviewId} reviewInfo={reviewInfo}>
							<DeleteReview
								reviewId={reviewId.toString()}
								propertyId={propertyId.toString()}
							/>
						</ReviewCard>
					);
				})}
			</section>
			<div className='mb-20 md:mb-12 lg:mb-24'>
				{showPagination && (
					<PaginationPage
						page={paginationPage}
						totalPages={totalPages}
						linkName='reviews'
					/>
				)}
			</div>
		</div>
	);
};

export default ReviewsPage;
