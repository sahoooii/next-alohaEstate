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

		const sender = await Profile.findById(
			{ _id: userId },
			{ firstName: 1, lastName: 1 }
		);
		const { firstName, lastName } = sender;
		const senderName = `${firstName} ${lastName}`;

		const newMessage = new Message({
			sender: userId,
			recipient,
			propertyId: validatedFields.propertyId,
			name: senderName,
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

//New sender × propertyId の組み合わせで最新メッセージ1件だけを取得
export const fetchGroupedMessages = async ({
	page,
	pageSize,
}: {
	page: number;
	pageSize: number;
}) => {
	await connectDB();
	const userId = await getUserId();

	const skip = (page - 1) * pageSize;

	const groupedMessages = await Message.aggregate([
		{ $match: { recipient: userId } },
		{ $sort: { createdAt: -1 } },
		// sender × propertyId ごとにグループ化（最新の1件だけ）
		{
			$group: {
				_id: {
					sender: '$sender',
					propertyId: '$propertyId',
				},
				messageId: { $first: '$_id' },
			},
		},
		// その messageId を元に、元のメッセージデータを取得
		{
			$lookup: {
				from: 'messages',
				localField: 'messageId',
				foreignField: '_id',
				as: 'message',
			},
		},
		{ $unwind: '$message' },
		{
			$lookup: {
				from: 'profiles',
				localField: 'message.sender',
				foreignField: '_id',
				as: 'sender',
			},
		},
		{ $unwind: '$sender' },
		{
			$lookup: {
				from: 'properties',
				localField: 'message.propertyId',
				foreignField: '_id',
				as: 'property',
			},
		},
		{ $unwind: '$property' },
		{
			$lookup: {
				from: 'profiles',
				localField: 'message.recipient',
				foreignField: '_id',
				as: 'recipient',
			},
		},
		{ $unwind: '$recipient' },
		{
			$addFields: {
				sender: {
					_id: '$sender._id',
					firstName: '$sender.firstName',
					lastName: '$sender.lastName',
					email: '$sender.email',
					profileImage: '$sender.profileImage',
				},
				property: {
					_id: '$property._id',
					name: '$property.name',
				},
				recipient: {
					_id: '$recipient._id',
					firstName: '$recipient.firstName',
					lastName: '$recipient.lastName',
					email: '$recipient.email',
					profileImage: '$recipient.profileImage',
				},
			},
		},
		// 必要なfieldだけ返す
		{
			$project: {
				_id: '$message._id',
				name: '$message.name',
				email: '$message.email',
				message: '$message.message',
				submitted: '$message.submitted',
				read: '$message.read',
				createdAt: '$message.createdAt',
				updateAt: '$message.updateAt',
				repliedMessage: '$message.repliedMessage',
				sender: {
					_id: '$sender._id',
					firstName: '$sender.firstName',
					lastName: '$sender.lastName',
					email: '$sender.email',
					profileImage: '$sender.profileImage',
				},
				recipient: {
					_id: '$recipient._id',
					firstName: '$recipient.firstName',
					lastName: '$recipient.lastName',
					email: '$recipient.email',
					profileImage: '$recipient.profileImage',
				},
				property: {
					_id: '$property._id',
					name: '$property.name',
				},
			},
		},
	])
		.sort({ createdAt: -1 })
		.skip(skip)
		.limit(pageSize);

	return groupedMessages;
};

//sender × propertyId の組み合わせで件数を取得 pagination
export const fetchGroupedMessagesLength = async () => {
	await connectDB();
	const userId = await getUserId();

	const grouped = await Message.aggregate([
		{ $match: { recipient: userId } },
		{
			$group: {
				_id: {
					sender: '$sender',
					propertyId: '$propertyId',
				},
			},
		},
	]);

	return grouped.length;
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
			name: rawData.name,
			email: validatedFields.email,
			message: validatedFields.message,
			submitted: true,
			senderMessageId: messageId,
		});

		// Mark as replied
		await Message.findOneAndUpdate(
			{ _id: messageId },
			{
				repliedMessage: {
					youGotReplied: true,
					youGotRepliedMessage: validatedFields.message,
					sender: validatedFields.recipient,
					recipient: userId,
				},
			}
		);

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
			_id: messageId,
			'repliedMessage.recipient': userId,
		},
		{
			repliedMessage: {
				youGotRepliedMessage: 1,
				sender: 1,
				recipient: 1,
				createdAt: 1,
			},
		}
	).populate([
		{
			path: 'repliedMessage',
			populate: {
				path: 'sender',
				select: 'firstName lastName profileImage',
				model: 'Profile',
			},
		},
		{
			path: 'repliedMessage',
			populate: {
				path: 'recipient',
				select: 'firstName lastName profileImage',
				model: 'Profile',
			},
		},
	]);

	return repliedMessages;
};

// Message chat page
export const fetchMessageChat = async (
	otherUserId: string,
	propertyId: string
) => {
	await connectDB();
	const currentUserId = await getUserId();

	const messages = await Message.find({
		propertyId,
		$or: [
			{ sender: currentUserId, recipient: otherUserId },
			{ sender: otherUserId, recipient: currentUserId },
		],
	})
		.sort({ createdAt: 1 }) // チャット風に古い順に表示
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

	return messages;
};
