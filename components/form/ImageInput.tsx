import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const ImageInput = () => {
	const name = 'image';
	return (
		<div className='mb-2 items-center'>
			<Label htmlFor={name} className='capitalize'>
				image
			</Label>
			<Input
				id={name}
				name={name}
				type='file'
				required
				accept='image/*'
				className='max-w-xs'
			/>
		</div>
	);
};

export default ImageInput;
