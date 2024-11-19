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

export const getAllPropertiesCount = async () => {
	await connectDB();
	const totalProperties = await Property.countDocuments({});

	return totalProperties;
};

// Fetch and search properties
export const fetchProperties = async ({
	search = '',
	category,
	page,
	pageSize,
}: {
	search?: string;
	category?: string;
	page: number;
	pageSize: number;
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

	const skip = (page - 1) * pageSize;

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
	)
		.sort({ createdAt: -1 })
		.skip(skip)
		.limit(pageSize);

	return properties;
};

// To get Favorite id (_id at Favorite schema)
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

// Find favorite Id and toggle function
export const toggleFavoriteAction = async (prevState: {
	propertyId: string;
	favoriteId: string | null;
	pathname: string;
}) => {
	const { propertyId, favoriteId, pathname } = prevState;

	await connectDB();
	const user = await getAuthUser();

	try {
		if (favoriteId) {
			await Favorite.deleteOne({ _id: favoriteId });
		} else {
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
	} finally {
		// For favorites page pagination, when delete last item at the page, back to the 1st page
		if (pathname === '/favorites') {
			redirect('/favorites');
		}
	}
};

export const fetchFavorites = async ({
	page,
	pageSize,
}: {
	page: number;
	pageSize: number;
}) => {
	await connectDB();
	const user = await getAuthUser();

	const skip = (page - 1) * pageSize;

	const favorites = await Favorite.find({ profileId: user.id })
		.sort({ updatedAt: -1 })
		.populate('propertyId', {
			id: 1,
			name: 1,
			tagline: 1,
			images: 1,
			country: 1,
			price: 1,
			location: 1,
		})
		.sort({ updatedAt: -1 })
		.skip(skip)
		.limit(pageSize);

	return favorites.map((favorite) => favorite.propertyId);
};

export const getAllFavorites = async () => {
	await connectDB();
	const user = await getAuthUser();

	const totalFavorites = await Favorite.countDocuments({ profileId: user.id });

	return totalFavorites;
};

// Featured Properties
// Pick two most reviews properties later
export const getFeaturedProperties = async () => {
	await connectDB();

	const properties = await Property.find(
		{
			is_featured: true,
		},
		{
			id: 1,
			name: 1,
			tagline: 1,
			images: 1,
			country: 1,
			price: 1,
			location: 1,
			guests: 1,
			beds: 1,
			baths: 1,
		}
	);

	return properties;
};
