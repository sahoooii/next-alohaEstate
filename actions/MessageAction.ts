'use server';

import connectDB from '@/config/database';
import { renderError } from './Auth';
import { getUserId } from './AuthUserAction';
import Message from '@/models/Message';
import { messageSchema, validateWithZodSchema } from '@/utils/schemas';
import { redirect } from 'next/navigation';
import Profile from '@/models/Profile';
import Property from '@/models/Property';

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
		// console.log(newMessage);
	} catch (error) {
		return renderError(error);
	}
	redirect('/messages');
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
				path: 'propertyId',
				select: 'name',
				model: Property,
			},
		]);

	return [...unreadMessages, ...readMessages].length;
};

export const markAsReadAction = async () => {
	await connectDB();
	const userId = await getUserId();
	return { message: 'You read this message' };
};

export const deleteMessageAction = async (prevState: {
	messageId: string;
	propertyId: string;
}) => {
	await connectDB();

	const userId = await getUserId();

	const { messageId, propertyId } = prevState;

	// try {
	// 	let property = await Message.findById(
	// 		{ _id: messageId },
	// 		{ averageRating: 1, numReviews: 1, reviews: 1 }
	// 	);

	// 	const deleteReview = property.reviews.find(
	// 		(review: { _id: { toString: () => string } }) =>
	// 			review._id.toString() === messageId
	// 	);

	// 	property = await Property.findOneAndUpdate(
	// 		{ _id: propertyId, 'reviews.profileId': userId },
	// 		{
	// 			$pull: { reviews: deleteReview },
	// 		},
	// 		{
	// 			new: true,
	// 		}
	// 	);

	// 	property.numReviews = property.reviews.length;

	// 	property.averageRating =
	// 		property.numReviews > 0 &&
	// 		(
	// 			property.reviews.reduce(
	// 				(acc: number, property: { rating: number }) => acc + property.rating,
	// 				0
	// 			) / property.reviews.length
	// 		).toFixed(1);

	// 	await property.save();

	// 	revalidatePath('/reviews');
	// 	return { message: 'Deleted Review successfully' };
	// } catch (error) {
	// 	return renderError(error);
	// }
	return { message: 'Deleted message successfully' };
};
