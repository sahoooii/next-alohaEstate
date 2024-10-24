import { createPropertyAction } from '@/actions/PropertyAction';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import SubmitButton from '@/components/form/SubmitButton';

const CreatePropertyPage = () => {
	return (
		<section className='container py-10'>
			<h1 className='text-2xl font-mono mb-8 capitalize'>create property</h1>
			<div className='border p-8 rounded'>
				<h3 className='text-lg mb-4 font-medium'>General Info</h3>
				<FormContainer action={createPropertyAction}>
					<div className='grid md:grid-cols-2 gap-8 mb-4'>
						{/* Attention!! defaultValue will delete later */}
						<FormInput
							name='name'
							type='text'
							label='Property Name (30 Limit)'
							placeholder='ex: Studio in Waikiki'
							defaultValue='Cabin in Waikiki'
						/>
						<FormInput
							name='tagline'
							type='text'
							label='Tagline (50 Limit)'
							placeholder='ex: Chill out all day'
							defaultValue='Beach All Day'
						/>
						<PriceInput />
						{/* categories */}
					</div>
					{/* textarea /description */}
					{/* location */}
					{/* Accommodation */}
					{/* images */}
					<div className='flex justify-center'>
						<SubmitButton
							text='create property'
							className='w-full md:w-[60%] mt-12'
						/>
					</div>
				</FormContainer>
			</div>
		</section>
	);
};

export default CreatePropertyPage;
