'use server';

import connectDB from '@/config/database';
import Profile from '@/models/Profile';
import { profileSchema } from '../schemas';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import cloudinary from '@/config/cloudinary';
import { redirect } from 'next/navigation';

export const createProfileAction = async (
	prevState: unknown,
	formData: FormData
) => {
	await connectDB();

	try {
		const user = await currentUser();
		if (!user) throw new Error('Please login to create a profile');

		const rawData = Object.fromEntries(formData);
		const validatedFields = profileSchema.parse(rawData);

		// username unique validate
		const username = validatedFields.username;
		const usernameExists = await Profile.findOne({ username });
		if (usernameExists) throw new Error('Your username is already in use.');

		const profileData = {
			clerkId: user?.id,
			email: user.emailAddresses[0].emailAddress,
			profileImage: user.imageUrl ?? '',
			...validatedFields,
		};
		const newProfile = new Profile(profileData);
		await newProfile.save();

		await clerkClient.users.updateUserMetadata(user.id, {
			privateMetadata: {
				hasProfile: true,
			},
		});
	} catch (error) {
		return {
			message: error instanceof Error ? error.message : 'An error occurred',
		};
	}
	redirect('/');
};

export const fetchProfileImage = async () => {
	await connectDB();

	const user = await currentUser();
	if (!user) return null;

	const profile = await Profile.find({ clerkId: user.id }).select(
		'profileImage'
	);
	const profileImage = profile && profile[0].profileImage;

	return profileImage;
};
