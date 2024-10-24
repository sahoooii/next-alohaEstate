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
			return !file || acceptedFilesTypes.includes(file.type);
		}, 'File must be an image');
}

// Property
export const propertySchema = z.object({
	name: z
		.string()
		.min(2, {
			message: 'Property name must be at least 2 characters.',
		})
		.max(100, {
			message: 'Property name must be less than 100 characters.',
		}),
	tagline: z
		.string()
		.min(2, {
			message: 'tagline must be at least 2 characters.',
		})
		.max(100, {
			message: 'tagline must be less than 100 characters.',
		}),
	price: z.coerce.number().int().min(0, {
		message: 'price must be a positive number.',
	}),
	category: z.string(),
	description: z.string().refine(
		(description) => {
			const wordCount = description.split(' ').length;
			return wordCount >= 10 && wordCount <= 1000;
		},
		{
			message: 'description must be between 10 and 1000 words.',
		}
	),
	location: z.object({
		street: z.string().min(2, {
			message: 'street must be at least 2 characters.',
		}),
		city: z.string().min(2, {
			message: 'city must be at least 2 characters.',
		}),
		state: z.string().min(2, {
			message: 'state must be at least 2 characters.',
		}),
		zipcode: z
			.string()
			.min(2, {
				message: 'zipcode must be at least 2 characters.',
			})
			.array(),
	}),
	guests: z.coerce.number().int().min(0, {
		message: 'guest amount must be a positive number.',
	}),
	bedrooms: z.coerce.number().int().min(0, {
		message: 'bedrooms amount must be a positive number.',
	}),
	beds: z.coerce.number().int().min(0, {
		message: 'beds amount must be a positive number.',
	}),
	baths: z.coerce.number().int().min(0, {
		message: 'bahts amount must be a positive number.',
	}),
	amenities: z.string(),
	is_featured: z.boolean(),
});
