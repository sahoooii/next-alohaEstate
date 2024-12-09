import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import ReviewMenu from '@/components/reviews/ReviewMenu';

const RatingInput = ({
	name,
	labelText,
}: {
	name: string;
	labelText?: string;
}) => {
	return (
		<div className='mb-2 max-w-md'>
			<Label htmlFor={name} className='capitalize'>
				{labelText || name}
			</Label>
			<Select defaultValue='3' name={name} required>
				<SelectTrigger className='w-full'>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{ReviewMenu.map((review) => (
						<SelectItem key={review.value} value={review.value}>
							<div className='flex items-center'>
								<review.icon className='mr-1.5 text-primary' /> {review.title}
							</div>
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default RatingInput;
