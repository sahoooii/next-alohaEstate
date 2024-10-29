import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const ImageInput = ({
	labelName,
	name,
}: {
	labelName: string;
	name: string;
}) => {
	// const name = 'image';
	return (
		<div className='mb-2 items-center'>
			<Label htmlFor={name} className='capitalize'>
				{labelName}
			</Label>
			<Input
				id={name}
				name={name}
				type='file'
				required
				accept='image/*'
				className='max-w-xs'
				multiple={name === 'images'}
			/>
		</div>
	);
};

export default ImageInput;
