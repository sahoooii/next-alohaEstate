import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: 'First Name must be at least 2 characters' })
		.max(30, { message: 'First Name must be in 30 characters or less' }),
	lastName: z
		.string()
		.min(2, { message: 'Last Name must be at least 2 characters' })
		.max(30, { message: 'Last Name must be in 30 characters or less' }),
	username: z
		.string()
		.min(2, { message: 'Username must be at least 2 characters' })
		.max(20, { message: 'Username must be in 20 characters or less' }),
});

export function validateWithZodSchema<T>(
	schema: ZodSchema<T>,
	data: unknown
): T {
	// Return success or not
	const result = schema.safeParse(data);

	if (!result.success) {
		const errors = result.error.errors.map((error) => error.message);
		throw new Error(errors.join('. '));
	}
	return result.data;
}

// For Image
export const imageSchema = z.object({
	image: validateFile(),
});

function validateFile() {
	const maxUploadSize = 1024 * 1024; // 1MB
	const acceptedFilesTypes = ['image/jpg', 'image/jpeg', 'image/png'];

	return z
		.instanceof(File)
		.refine((file) => {
			return !file || file.size <= maxUploadSize;
		}, 'File size must be less than 1 MB')
		.refine((file) => {
			return (
				!file || acceptedFilesTypes.includes(file.type)
			);
		}, 'File must be an image');
}
