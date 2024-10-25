'use server';

import connectDB from '@/config/database';
import { getAuthUser, renderError } from './Auth';
import { propertySchema, validateWithZodSchema } from '@/utils/schemas';
import { redirect } from 'next/navigation';

export const createPropertyAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	await connectDB();
	const user = await getAuthUser();

	try {
		const rawData = Object.fromEntries(formData);
		// console.log(rawData);

		const validatedFields = validateWithZodSchema(propertySchema, rawData);
		console.log(validatedFields);

		return { message: 'Property created' };
	} catch (error) {
		return renderError(error);
	}
	// redirect('/');
};
