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
