'use client';

import { useState } from 'react';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import { Card } from '@/components/ui/card';
import RatingInput from '@/components/form/RatingInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Button } from '@/components/ui/button';
import { createReviewAction } from '@/actions/ReviewsAction';
import { MdOutlineRateReview } from 'react-icons/md';

const CreateReview = ({ propertyId }: { propertyId: string }) => {
	const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

	return (
		<div className='mt-8'>
			<Button
				className='bg-gray-700 w-full sm:w-[300px] hover:bg-gray-400'
				onClick={() => setIsReviewFormVisible((prev) => !prev)}
			>
				Wite A Review <MdOutlineRateReview className='ml-1' />
			</Button>
			{isReviewFormVisible && (
				<Card className='p-8 mt-8'>
					<FormContainer action={createReviewAction}>
						<input type='hidden' name='propertyId' value={propertyId} />
						<RatingInput name='rating' />
						<TextAreaInput
							name='comment'
							labelText='Comment'
							placeholder='Please tell other users your opinion'
						/>
						<div className='flex justify-center mt-6'>
							<SubmitButton
								text='Submit a Review'
								className='sm:w-[80%] w-full'
							/>
						</div>
					</FormContainer>
				</Card>
			)}
		</div>
	);
};

export default CreateReview;
