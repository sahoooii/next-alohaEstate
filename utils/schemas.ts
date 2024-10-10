import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
	firstName: z
		.string()
		.min(2, {
			message: 'First name must be at least 2 characters',
		})
		.max(100, {
			message: 'First name must be within 100 characters',
		}),
	lastName: z
		.string()
		.min(2, {
			message: 'Last name must be at least 2 characters',
		})
		.max(100, {
			message: 'Last name must be within 100 characters',
		}),
	userName: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters',
		})
		.max(100, {
			message: 'Username must be within 100 characters',
		}),
});
