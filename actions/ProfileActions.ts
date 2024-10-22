'use server';

import connectDB from '@/config/database';
import Profile from '@/models/Profile';
import {
	imageSchema,
	profileSchema,
	validateWithZodSchema,
} from '../utils/schemas';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getAuthUser, renderError } from './Auth';
import { revalidatePath } from 'next/cache';
import { uploadImage } from '@/utils/imageUpload';

export const createProfileAction = async (
	prevState: unknown,
	formData: FormData
) => {
	await connectDB();

	try {
		const user = await currentUser();
		if (!user) throw new Error('Please login to create a profile');

		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(profileSchema, rawData);

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
		return renderError(error);
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
	const profileImage = profile[0]?.profileImage;

	return profileImage;
};

export const fetchProfile = async () => {
	await connectDB();

	const user = await getAuthUser();
	const profile = await Profile.find({ clerkId: user.id });
	if (!profile) redirect('/profile/create');

	return profile[0];
};

export const updateProfileAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	await connectDB();

	const user = await getAuthUser();

	try {
		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(profileSchema, rawData);

		const profile = await Profile.find({ clerkId: user.id });

		// Check username
		let typedUsername = validatedFields.username;
		// username unique validate
		const usernameExists = await Profile.findOne({ username: typedUsername });

		// Check login user and typed name user is the same person, if so, can use the same username
		if (profile[0].username === typedUsername) {
			typedUsername = typedUsername || profile[0].username;
		} else if (usernameExists) {
			throw new Error('This username is already in use');
		} else {
			typedUsername = typedUsername || profile[0].username;
		}

		await Profile.findOneAndUpdate(profile[0], validatedFields);

		revalidatePath('/profile');
		return { message: 'Profile updated successfully' };
	} catch (error) {
		return renderError(error);
	}
};

// Profile image update
export const updateProfileImageAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	try {
		await connectDB();
		
		const user = await getAuthUser();
		const profile = await Profile.find({ clerkId: user.id });

		const image = formData.get('image') as File;
		validateWithZodSchema(imageSchema, { image });

		const fileName = 'profile';
		const imageUrl = await uploadImage(image, fileName);
		await Profile.findOneAndUpdate(profile[0], { profileImage: imageUrl });

		revalidatePath('/profile');
		return { message: 'Profile image updated successfully' };
	} catch (error) {
		return renderError(error);
	}
};
