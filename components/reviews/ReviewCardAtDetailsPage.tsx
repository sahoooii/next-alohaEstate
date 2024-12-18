import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Comment from './Comment';
import Rating from './Rating';
import Image from 'next/image';

type ReviewCardProps = {
	reviewInfo: {
		profileId: string;
		name: string;
		profileImage: string;
		rating: number;
		comment: string;
		_id: string;
		createdAt: Date;
	};
};

const ReviewCardAtDetailsPage = ({ reviewInfo }: ReviewCardProps) => {
	const { createdAt } = reviewInfo;
	const createdDate = createdAt.toString().substring(0, 15);

	return (
		<Card className='relative'>
			<CardHeader>
				<div className='flex items-center'>
					<Image
						src={reviewInfo.profileImage}
						width={50}
						height={50}
						alt={reviewInfo.name}
						className='rounded-full w-14 h-14 object-cover'
					/>
					<div className='ml-4'>
						<h3 className='text-sm font-bold capitalize mb-1'>
							{reviewInfo.name}
						</h3>
						<p className='text-sm text-gray-600'>{createdDate}</p>
						<Rating rating={reviewInfo.rating} />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<Comment comment={reviewInfo.comment} />
			</CardContent>
		</Card>
	);
};

export default ReviewCardAtDetailsPage;
