import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Comment from './Comment';
import Rating from './Rating';
import Image from 'next/image';

type ReviewCardProps = {
	reviewInfo: {
		comment: string;
		rating: number;
		name: string;
		profileImage: string;
	};
	children?: React.ReactNode;
};

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
	return (
		<Card className='relative'>
			<CardHeader>
				<div className='flex items-center'>
					<Image
						src={reviewInfo.profileImage}
						width={50}
						height={50}
						alt={reviewInfo.name}
						className='rounded-full w-12 h-12 object-cover'
					/>
					<div className='ml-4'>
						<h3 className='text-sm font-bold capitalize mb-1'>
							{reviewInfo.name}
						</h3>
						<Rating rating={reviewInfo.rating} />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<Comment comment={reviewInfo.comment} />
			</CardContent>
			{/* Delete button */}
			<div className='absolute top-3 right-3'>{children}</div>
		</Card>
	);
};

export default ReviewCard;
