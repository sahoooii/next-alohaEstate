'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { SubmitButton } from './Buttons';
import { type actionFunction } from '@/utils/types';
import { LuUser2 } from 'react-icons/lu';

type ImageInputContainerProps = {
	image: string;
	name: string;
	action: actionFunction;
	text: string;
	children?: React.ReactNode;
	style?: string;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
	const { image, name, action, text, children, style } = props;
	const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

	return (
		<div className={style}>
			{image ? (
				<Image
					src={image}
					alt={name}
					width={200}
					height={200}
					className='rounded-full object-cover mb-4 w-28 h-28'
				/>
			) : (
				<LuUser2 className='w-28 h-28 rounded-full bg-primary text-white mb-4' />
			)}
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
						<ImageInput labelName='Image' name='image' />
						<div className='flex justify-center items-center'>
							<SubmitButton size='lg' text='change photo' />
						</div>
					</FormContainer>
				</div>
			)}
		</div>
	);
};

export default ImageInputContainer;
