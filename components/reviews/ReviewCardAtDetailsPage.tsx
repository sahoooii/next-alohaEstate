import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Comment from './Comment';
import Rating from './Rating';
import Image from 'next/image';
import { Reviews } from '@/utils/types';

const ReviewCardAtDetailsPage = ({ reviews }: { reviews: Reviews }) => {
	const { createdAt, comment, rating } = reviews;

	const createdDate = createdAt.toString().substring(0, 15);

	const { username, profileImage } = reviews.profileId;

	return (
		<Card>
			<CardHeader>
				<div className='flex items-center'>
					<Image
						src={profileImage}
						width={50}
						height={50}
						alt={username}
						className='rounded-full w-14 h-14 object-cover'
					/>
					<div className='ml-4'>
						<h3 className='text-sm font-bold capitalize mb-1'>{username}</h3>
						<p className='text-sm text-gray-600'>{createdDate}</p>
						<Rating rating={rating} />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<Comment comment={comment} />
			</CardContent>
		</Card>
	);
};

export default ReviewCardAtDetailsPage;
