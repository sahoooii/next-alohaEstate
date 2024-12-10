import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
	name: string;
	labelText?: string;
	placeholder?: string;
};

const TextAreaInput = ({
	name,
	labelText,
	placeholder,
}: TextAreaInputProps) => {
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className='capitalize'>
				{labelText || name}
			</Label>
			<Textarea
				id={name}
				name={name}
				placeholder={placeholder || ''}
				rows={5}
				required
				className='leading-loose'
			/>
		</div>
	);
};

export default TextAreaInput;
