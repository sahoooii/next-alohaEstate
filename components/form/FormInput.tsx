import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type FormInputProps = {
	name: string;
	type: string;
	label?: string;
	defaultValue?: string;
	placeholder?: string;
	className?: string;
};

const FormInput = (props: FormInputProps) => {
	const { name, type, label, defaultValue, placeholder, className } = props;
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className='text-md capitalize'>
				{label || name}
			</Label>
			<Input
				id={name}
				name={name}
				type={type}
				defaultValue={defaultValue}
				placeholder={placeholder}
				required
				className={className}
			/>
		</div>
	);
};

export default FormInput;
