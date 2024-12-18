import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Comment from './Comment';
import Rating from './Rating';
import Image from 'next/image';
import Link from 'next/link';

type ReviewCardProps = {
	reviewInfo: {
		propertyId: string;
		name: string;
		propertyImage: string;
		comment: string;
		rating: number;
		profileImage: string;
		createdDate: string;
	};
	children?: React.ReactNode;
};

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
	return (
		<Card className='relative'>
			<CardHeader>
				<div className='flex items-center'>
					<Link href={`/properties/${reviewInfo.propertyId}`}>
						<Image
							src={reviewInfo.propertyImage}
							width={50}
							height={50}
							alt={reviewInfo.name}
							className='rounded-sm w-20 h-20 object-cover'
						/>
					</Link>
					<div className='ml-4'>
						<Link href={`/properties/${reviewInfo.propertyId}`}>
							<h3 className='text-base font-bold capitalize mb-1 underline'>
								{reviewInfo.name}
							</h3>
						</Link>
						<p className='text-sm text-gray-600'>{reviewInfo.createdDate}</p>
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
