import {
	updatePropertyAction,
	updatePropertyImagesAction,
	fetchRentalDetails,
} from '@/actions/MyRentalsAction';
import { redirect } from 'next/navigation';
import { type Amenity } from '@/utils/amenities';
import BreadCrumps from '@/components/propertyDetails/BreadCrumps';
import { SubmitButton } from '@/components/form/Buttons';
import CategoriesInput from '@/components/form/CategoriesInput';
import CounterInput from '@/components/form/CounterInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import ImagesInputContainer from '@/components/form/ImagesInputContainer';
import ImageContainer from '@/components/propertyDetails/ImageContainer';
import AmenitiesInput from '@/components/form/AmenitiesInput';

const EditRentalPage = async ({ params }: { params: { id: string } }) => {
	const property = await fetchRentalDetails(params.id);
	// console.log(property);
	if (!property) redirect('/');
	const { _id } = property;
	const propertyId = _id.toString();

	const defaultAmenities: Amenity[] = JSON.parse(property.amenities);

	return (
		<section className='container pt-10 pb-28 sm:pb-16 md:pb-32'>
			<div className='mb-4'>
				<h1 className='text-2xl font-mono mb-4 capitalize'>Edit Property</h1>
				<BreadCrumps
					name={property.name}
					link='/rentals'
					title='My Properties'
				/>
			</div>
			<div className='border p-8 rounded-md'>
				<div>
					{/* Sliders */}
					<ImageContainer images={property.images} name={property.name} />
					<div className='flex items-center justify-center mt-6'>
						<ImagesInputContainer
							text='Update Images (4 Limit)'
							action={updatePropertyImagesAction}
						>
							<input type='hidden' name='id' value={propertyId} />
						</ImagesInputContainer>
					</div>
				</div>
				<FormContainer action={updatePropertyAction}>
					<div>
						<input type='hidden' name='id' value={propertyId} />
						<div className='grid md:grid-cols-2 gap-8 mb-4 mt-8'>
							<FormInput
								name='name'
								type='text'
								label='Property Name (30 Limit)'
								defaultValue={property.name}
							/>
							<FormInput
								name='tagline'
								type='text'
								label='Tagline (50 Limit)'
								defaultValue={property.tagline}
							/>
							<PriceInput defaultValue={property.price} />
							<CategoriesInput defaultValue={property.category} />
						</div>
						<TextAreaInput
							name='description'
							labelText='Description (10 - 3000 words)'
							defaultValue={property.description}
						/>
						<div className='mb-4 bg-blue-50 p-4 mt-4'>
							<h3 className='text-lg mb-3 font-medium text-gray-700'>
								Location
							</h3>
							<div className='grid md:grid-cols-2 md:gap-5 mb-6'>
								<FormInput
									name='street'
									label='street'
									type='text'
									defaultValue={property.location.street}
									className='py-2 px-3 bg-white '
								/>
								<FormInput
									name='city'
									type='text'
									defaultValue={property.location.city}
									className='py-2 px-3 bg-white'
								/>
								<FormInput
									name='state'
									type='text'
									defaultValue={property.location.state}
									className='py-2 px-3 bg-white'
								/>
								<FormInput
									name='zipcode'
									type='text'
									defaultValue={property.location.zipcode}
									className='py-2 px-3 bg-white'
								/>
							</div>
						</div>
						<h3 className='text-lg mt-8 mb-4 font-medium'>
							Accommodation Detail
						</h3>
						<CounterInput detail='guests' defaultValue={property.guests} />
						<CounterInput detail='bedrooms' defaultValue={property.bedrooms} />
						<CounterInput detail='beds' defaultValue={property.beds} />
						<CounterInput detail='baths' defaultValue={property.baths} />
						<div className='mb-6 bg-blue-50 sm:p-10 p-4 mt-14'>
							<h3 className='text-lg mb-6 font-medium text-gray-700'>
								Amenities
							</h3>
							<AmenitiesInput defaultValue={defaultAmenities} />
						</div>
						<div className='flex justify-center'>
							<SubmitButton
								text='edit property'
								className='w-full md:w-[60%] mt-12'
							/>
						</div>
					</div>
				</FormContainer>
			</div>
		</section>
	);
};

export default EditRentalPage;
