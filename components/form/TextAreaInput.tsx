import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
	name: string;
	labelText?: string;
	defaultValue?: string;
};

const tempDescription =
	"Aloha & Welcome to Mermaid's Oasis! This 4 bedroom home is directly oceanfront in spectacular Hawaiian Paradise Park. I also have a two bedroom Ocean front with pool just .5 miles down the road if your party is bigger than 10 please inquire about the other property as well. It truly is paradise here! Before you even step foot in the door you are greeted by a Hawaiian Sea turtle fountain and pond, with tropical flowers and fish. Enjoy listening to the waves crashing on the lava rock cliffs and revel in the awe-inspiring Ocean views that can be seen throughout the home's living room, dining room, and covered lanai areas. ";

const TextAreaInput = ({
	name,
	labelText,
	defaultValue,
}: TextAreaInputProps) => {
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className='capitalize'>
				{labelText || name}
			</Label>
			<Textarea
				id={name}
				name={name}
				defaultValue={defaultValue || tempDescription}
				rows={5}
				required
				className='leading-loose'
			/>
		</div>
	);
};

export default TextAreaInput;
