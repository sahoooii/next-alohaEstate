'use server';

import connectDB from '@/config/database';
import { getAuthUser, renderError } from './Auth';
import { revalidatePath } from 'next/cache';
import {
	imagesSchema,
	propertySchema,
	validateWithZodSchema,
} from '@/utils/schemas';
import { redirect } from 'next/navigation';
import { uploadImages } from '@/utils/imageUpload';
import Property from '@/models/Property';
import Favorite from '@/models/Favorite';

export const createPropertyAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	await connectDB();

	try {
		const user = await getAuthUser();

		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(propertySchema, rawData);

		// Images
		const files = formData.getAll('images') as File[];
		const images = files.filter((image) => image.name !== '');
		validateWithZodSchema(imagesSchema, { images });

		const fileName = 'properties';
		const imagesUrls = await uploadImages(images, fileName);

		const propertyData = {
			owner: user.id,
			location: {
				street: validatedFields.street,
				city: validatedFields.city,
				state: validatedFields.state,
				zipcode: validatedFields.zipcode,
			},
			images: [''],
			...validatedFields,
		};

		propertyData.images = imagesUrls;

		const newProperty = new Property(propertyData);
		await newProperty.save();
	} catch (error) {
		return renderError(error);
	}
	redirect('/');
};

// fetch and search properties
export const fetchProperties = async ({
	search = '',
	category,
}: {
	search?: string;
	category?: string;
}) => {
	await connectDB();

	const hasCategory = category ? { category: category } : {};

	const hasSearch = search
		? {
				$or: [
					{
						name: { $regex: search, $options: 'i' },
					},
					{
						tagline: { $regex: search, $options: 'i' },
					},
				],
		  }
		: {};

	const haveCategoryAndSearch =
		category && search
			? {
					category: category,
					$or: [
						{
							name: { $regex: search, $options: 'i' },
						},
						{
							tagline: { $regex: search, $options: 'i' },
						},
					],
			  }
			: {};

	const properties = await Property.find(
		{
			...hasCategory,
			...hasSearch,
			...haveCategoryAndSearch,
		},
		{
			id: 1,
			name: 1,
			tagline: 1,
			images: 1,
			country: 1,
			price: 1,
			location: 1,
		}
	).sort({ updatedAt: -1 });

	return properties;
};

export const fetchFavoriteId = async ({
	propertyId,
}: {
	propertyId: string;
}) => {
	await connectDB();

	const user = await getAuthUser();
	const favorite = await Favorite.findOne(
		{
			propertyId,
			profileId: user.id,
		},
		{
			id: 1,
		}
	);

	return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
	propertyId: string;
	favoriteId: string | null;
	pathname: string;
}) => {
	const { propertyId, favoriteId, pathname } = prevState;
	console.log(propertyId, favoriteId, pathname);
	await connectDB();

	const user = await getAuthUser();

	// login userとfavoriteを押したuserが一緒か
	try {
		const sameUser = favoriteId && await Favorite.find({ id: favoriteId }, {});
		console.log('same:', sameUser);
		console.log('fav:', favoriteId);
		console.log(sameUser[0].profileId === user.id);

		if (favoriteId) {
			if (sameUser[0].profileId === user.id) {
				await Favorite.deleteOne({ id: favoriteId });
			}
		}
		if (!favoriteId) {
			await Favorite.create({
				profileId: user.id,
				propertyId,
			});
		}
		revalidatePath(pathname);

		return {
			message: favoriteId
				? 'Removed from favorites list'
				: 'Added to favorites list',
		};
	} catch (error) {
		return renderError(error);
	}
};
