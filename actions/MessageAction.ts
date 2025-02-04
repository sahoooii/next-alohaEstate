'use server';

import connectDB from '@/config/database';
import { renderError } from './Auth';
import { getUserId } from './AuthUserAction';
import Message from '@/models/Message';
import { messageSchema, validateWithZodSchema } from '@/utils/schemas';
import { redirect } from 'next/navigation';
import Profile from '@/models/Profile';
import Property from '@/models/Property';
import { revalidatePath } from 'next/cache';

export const sendMessageAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	await connectDB();
	const userId = await getUserId();

	try {
		const rawData = Object.fromEntries(formData);

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
	redirect('/');
};

export const fetchMessages = async ({
	page,
	pageSize,
}: {
	page: number;
	pageSize: number;
}) => {
	await connectDB();
	const userId = await getUserId();

	const skip = (page - 1) * pageSize;

	const readMessages = await Message.find({
		recipient: userId,
		read: true,
	})
		.sort({ createdAt: -1 })
		.populate([
			{
				path: 'sender',
				select: 'firstName lastName profileImage',
				model: Profile,
			},
			{
				path: 'recipient',
				select: 'firstName lastName profileImage email',
				model: Profile,
			},
			{
				path: 'propertyId',
				select: 'name',
				model: Property,
			},
		])
		.skip(skip)
		.limit(pageSize);

	// .populate('sender', 'firstName lastName profileImage')
	// .populate('propertyId', 'name');

	const unreadMessages = await Message.find({
		recipient: userId,
		read: false,
	})
		.sort({ createdAt: -1 })
		.populate([
			{
				path: 'sender',
				select: 'firstName lastName profileImage',
				model: Profile,
			},
			{
				path: 'recipient',
				select: 'firstName lastName profileImage email',
				model: Profile,
			},
			{
				path: 'propertyId',
				select: 'name',
				model: Property,
			},
		])
		.skip(skip)
		.limit(pageSize);

	return [...unreadMessages, ...readMessages];
};

// For pagination
export const fetchAllMessages = async () => {
	await connectDB();
	const userId = await getUserId();

	const readMessages = await Message.find({
		recipient: userId,
		read: true,
	})
		.sort({ createdAt: -1 })
		.populate([
			{
				path: 'sender',
				select: 'firstName lastName profileImage',
				model: Profile,
			},
			{
				path: 'recipient',
				select: 'firstName lastName profileImage email',
				model: Profile,
			},
			{
				path: 'propertyId',
				select: 'name',
				model: Property,
			},
		]);

	const unreadMessages = await Message.find({
		recipient: userId,
		read: false,
	})
		.sort({ createdAt: -1 })
		.populate([
			{
				path: 'sender',
				select: 'firstName lastName profileImage',
				model: Profile,
			},
			{
				path: 'recipient',
				select: 'firstName lastName profileImage email',
				model: Profile,
			},
			{
				path: 'propertyId',
				select: 'name',
				model: Property,
			},
		]);

	return [...unreadMessages, ...readMessages].length;
};

export const markAsReadAction = async (prevState: { messageId: string }) => {
	await connectDB();

	const userId = await getUserId();
	const { messageId } = prevState;

	try {
		await Message.findOneAndUpdate(
			{
				_id: messageId,
				recipient: userId,
			},
			{
				read: true,
			}
		);

		revalidatePath('/messages');
		return { message: 'You read this message' };
	} catch (error) {
		return renderError(error);
	}
};

export const deleteMessageAction = async (prevState: { messageId: string }) => {
	await connectDB();

	const userId = await getUserId();
	const { messageId } = prevState;

	try {
		await Message.deleteOne({
			_id: messageId,
			recipient: userId,
		});

		revalidatePath('/messages');
		return { message: 'Deleted message successfully' };
	} catch (error) {
		return renderError(error);
	}
};

export const getUnreadMessageCount = async () => {
	await connectDB();

	const userId = await getUserId();

	const unreadMessageCount = await Message.countDocuments({
		recipient: userId,
		read: false,
	});

	return unreadMessageCount;
};

export const sendReplyMessageAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	await connectDB();
	const userId = await getUserId();

	try {
		const rawData = Object.fromEntries(formData);

		const validatedFields = validateWithZodSchema(messageSchema, rawData);

		const messageId = rawData.messageId;

		const replyMessage = new Message({
			sender: userId,
			recipient: validatedFields.recipient,
			propertyId: validatedFields.propertyId,
			name: validatedFields.name,
			email: validatedFields.email,
			message: validatedFields.message,
			submitted: true,
			repliedId: messageId,
		});
		// Mark as replied
		await Message.findOneAndUpdate({ _id: messageId }, { isReplied: true });

		await replyMessage.save();
	} catch (error) {
		return renderError(error);
	}
	redirect('/messages');
};

export const fetchRepliedMessage = async (messageId: string) => {
	await connectDB();
	const userId = await getUserId();

	const repliedMessages = await Message.find(
		{
			repliedId: messageId,
			sender: userId,
		},
		{ message: 1, createdAt: 1, sender: 1, recipient: 1 }
	).populate([
		{
			path: 'sender',
			select: 'firstName profileImage',
			model: Profile,
		},
		{
			path: 'recipient',
			select: 'firstName lastName',
			model: Profile,
		},
	]);
	return repliedMessages;
};
