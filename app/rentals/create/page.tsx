import { createPropertyAction } from '@/actions/PropertyAction';
import AmenitiesInput from '@/components/form/AmenitiesInput';
import CategoriesInput from '@/components/form/CategoriesInput';
import CounterInput from '@/components/form/CounterInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import SubmitButton from '@/components/form/SubmitButton';
import TextAreaInput from '@/components/form/TextAreaInput';

const CreatePropertyPage = () => {
	return (
		<section className='container py-10 mb-10 md:mb-14'>
			<h1 className='text-2xl font-mono mb-8 capitalize'>create property</h1>
			<div className='border p-4 sm:p-8 rounded'>
				<h3 className='text-lg mb-4 font-medium'>General Info</h3>
				<FormContainer action={createPropertyAction}>
					<div className='grid md:grid-cols-2 gap-8 mb-4'>
						{/* Attention!! defaultValue will delete later */}
						<FormInput
							name='name'
							type='text'
							label='Property Name (30 Limit)'
							placeholder='ex: Studio in Waikiki'
							defaultValue='House in Waikiki'
						/>
						<FormInput
							name='tagline'
							type='text'
							label='Tagline (50 Limit)'
							placeholder='ex: Chill out all day'
							defaultValue='Beach All Day'
						/>
						<PriceInput />
						<CategoriesInput />
					</div>
					<TextAreaInput
						name='description'
						labelText='Description (10 - 3000 words)'
					/>
					{/* location */}
					<div className='mb-4 bg-blue-50 p-4 mt-4'>
						<h3 className='text-lg mb-3 font-medium text-gray-700'>Location</h3>
						<div className='grid md:grid-cols-2 md:gap-5 mb-6'>
							<FormInput
								name='street'
								label='street'
								type='text'
								placeholder='ex: Seaside Ave.'
								defaultValue='Seaside Ave.'
								className=' py-2 px-3 bg-white '
							/>
							<FormInput
								name='city'
								type='text'
								placeholder='ex: Honolulu'
								defaultValue='Honolulu'
								className=' py-2 px-3 bg-white'
							/>
							<FormInput
								name='state'
								type='text'
								placeholder='ex: Hawaii'
								defaultValue='Hawaii'
								className=' py-2 px-3 bg-white'
							/>
							<FormInput
								name='zipcode'
								type='text'
								placeholder='ex: 96815'
								defaultValue='96815'
								className=' py-2 px-3 bg-white'
							/>
						</div>
					</div>
					{/* Accommodation */}
					<h3 className='text-lg mt-8 mb-4 font-medium'>
						Accommodation Detail
					</h3>
					<CounterInput detail='guests' />
					<CounterInput detail='bedrooms' />
					<CounterInput detail='beds' />
					<CounterInput detail='baths' />
					{/* Amenities */}
					<div className='mb-6 bg-blue-50 sm:p-10 p-4 mt-14'>
						<h3 className='text-lg mb-6 font-medium text-gray-700'>
							Amenities
						</h3>
						<AmenitiesInput />
					</div>
					{/* images */}
					<div className='mb-4'>
						<ImageInput labelName='Images (4 Limit)' name='images' />
					</div>
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
