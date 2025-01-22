'use server';

import connectDB from '@/config/database';
import { renderError } from './Auth';
import { getUserId } from './AuthUserAction';
import Message from '@/models/Message';
import { messageSchema, validateWithZodSchema } from '@/utils/schemas';
import { redirect } from 'next/navigation';

export const sendMessageAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	await connectDB();
	const userId = await getUserId();

	try {
		const rawData = Object.fromEntries(formData);
		console.log(rawData);

		const validatedFields = validateWithZodSchema(messageSchema, rawData);

		const recipient = validatedFields.recipient;

		if (userId === recipient) {
			return { message: 'You can not send a message to yourself' };
		}

		const newMessage = new Message({
			sender: userId,
			recipient,
			propertyId: validatedFields.propertyId,
			name: validatedFields.name,
			email: validatedFields.email,
			message: validatedFields.message,
			submitted: true,
		});

		await newMessage.save();
	} catch (error) {
		return renderError(error);
	}
	redirect('/messages');
};
