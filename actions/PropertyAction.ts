'use server';

import connectDB from '@/config/database';
import { getAuthUser, renderError } from './Auth';
import {
	imagesSchema,
	propertySchema,
	validateWithZodSchema,
} from '@/utils/schemas';
import { redirect } from 'next/navigation';
import { uploadImages } from '@/utils/imageUpload';
import Property from '@/models/Property';

export const createPropertyAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	await connectDB();

	try {
		const user = await getAuthUser();

		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(propertySchema, rawData);

		// Images
		const files = formData.getAll('images') as File[];
		const images = files.filter((image) => image.name !== '');
		validateWithZodSchema(imagesSchema, { images });

		const fileName = 'properties';
		const imagesUrls = await uploadImages(images, fileName);

		const propertyData = {
			owner: user.id,
			location: {
				street: validatedFields.street,
				city: validatedFields.city,
				state: validatedFields.state,
				zipcode: validatedFields.zipcode,
			},
			images: [''],
			...validatedFields,
		};

		propertyData.images = imagesUrls;

		const newProperty = new Property(propertyData);
		await newProperty.save();
	} catch (error) {
		return renderError(error);
	}
	redirect('/');
};
