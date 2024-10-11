'use server';

import { profileSchema } from '../schemas';

export const createProfileAction = async (
	prevState: unknown,
	formData: FormData
) => {
	try {
		const rawData = Object.fromEntries(formData);
		const validatedFields = profileSchema.parse(rawData);
		return { message: 'Profile created successfully' };
	} catch (error) {
		console.log(error);
		return { message: 'You must contain at least 2 characters' };
	}
};
