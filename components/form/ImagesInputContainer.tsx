'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { SubmitButton } from './Buttons';
import { type actionFunction } from '@/utils/types';

type ImageInputContainerProps = {
	action: actionFunction;
	text: string;
	children?: React.ReactNode;
	style?: string;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
	const { action, text, children, style } = props;
	const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

	return (
		<div className={style}>
			{/* image update toggle button */}
			<Button
				variant='outline'
				size='sm'
				onClick={() => setIsUpdateFormVisible((prev) => !prev)}
			>
				{text}
			</Button>

			{isUpdateFormVisible && (
				<div className='max-w-lg mt-4'>
					<FormContainer action={action}>
						{children}
						<ImageInput labelName='Images' name='images' />
						<div className='flex justify-center items-center mt-2'>
							<SubmitButton size='lg' text='change photo' />
						</div>
					</FormContainer>
				</div>
			)}
		</div>
	);
};

export default ImageInputContainer;
