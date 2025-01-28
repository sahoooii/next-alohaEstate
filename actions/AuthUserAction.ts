'use server';

import connectDB from '@/config/database';
import { getAuthUser } from './Auth';
import Profile from '@/models/Profile';
import { redirect } from 'next/navigation';

export const getUserId = async () => {
	await connectDB();

	const user = await getAuthUser();
	const userInfo =
		user && (await Profile.find({ clerkId: user.id }, { _id: 1 }));
	const userId = userInfo[0]._id;

	return userId;
};

export const getAdminUser = async () => {
	await connectDB();

	const user = await getAuthUser();
	if (user.id !== process.env.ADMIN_USER_ID) redirect('/');
	return user;
};
