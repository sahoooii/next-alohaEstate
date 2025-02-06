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

// Image
const maxUploadSize = 1024 * 1024; // 1MB
const acceptedFilesTypes = ['image/jpg', 'image/jpeg', 'image/png'];

// For an image
export const imageSchema = z.object({
	image: validateFile(),
});

function validateFile() {
	return z
		.instanceof(File)
		.refine((file) => {
			return !file || file.size <= maxUploadSize;
		}, 'File size must be less than 1 MB')
		.refine((file) => {
			return !file || acceptedFilesTypes.includes(file.type);
		}, 'File must be an image');
}

// For multiple images
export const imagesSchema = z.object({
	images: validateFiles(),
});

function validateFiles() {
	return z
		.array(
			z.instanceof(File).refine((file) => {
				return !file || file.size <= maxUploadSize;
			}, 'File size must be less than 1MB'),
			z.string()
		)
		.refine((file) => {
			return file.length <= 4;
		}, 'The images are up to 4 images')
		.refine((files) => {
			return files.every(
				(file) => !file || acceptedFilesTypes.includes(file.type)
			);
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
			message: 'Tagline must be at least 2 characters.',
		})
		.max(100, {
			message: 'Tagline must be less than 100 characters.',
		}),
	price: z.coerce.number().int().min(0, {
		message: 'Price must be a positive number.',
	}),
	category: z.string(),
	description: z.string().refine(
		(description) => {
			const wordCount = description.split(' ').length;
			return wordCount >= 10 && wordCount <= 3000;
		},
		{
			message: 'Description must be between 10 and 1000 words.',
		}
	),
	street: z.string().min(2, {
		message: 'Street name must be at least 2 characters.',
	}),
	city: z.string().min(2, {
		message: 'City name must be at least 2 characters.',
	}),
	state: z.string().min(2, {
		message: 'State name must be at least 2 characters.',
	}),
	zipcode: z.string().min(2, {
		message: 'Zipcode must be at least 2 characters.',
	}),
	guests: z.coerce.number().int().min(0, {
		message: 'Guest amount must be a positive number.',
	}),
	bedrooms: z.coerce.number().int().min(0, {
		message: 'Bedrooms amount must be a positive number.',
	}),
	beds: z.coerce.number().int().min(0, {
		message: 'Beds amount must be a positive number.',
	}),
	baths: z.coerce.number().int().min(0, {
		message: 'Bahts amount must be a positive number.',
	}),
	amenities: z.string(),
});

//Property Review
export const createReviewSchema = z.object({
	propertyId: z.string(),
	rating: z.coerce.number().int().min(1).max(5),
	comment: z
		.string()
		.min(10, {
			message: 'Comment must be at least 10 characters.',
		})
		.max(1000, {
			message: 'Comment must be less than 1000 characters',
		}),
});

export const messageSchema = z.object({
	recipient: z.string(),
	propertyId: z.string(),
	email: z.string().email(),
	message: z
		.string()
		.min(10, { message: 'Message must be at least 10 characters' })
		.max(3000, { message: 'Message must be in 3000 characters or less' }),
});
