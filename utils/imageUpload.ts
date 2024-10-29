import cloudinary from '@/config/cloudinary';

// For a single image
export const uploadImage = async (image: File, fileName: string) => {
	const imageBuffer = await image.arrayBuffer();
	const imageArray = new Uint8Array(imageBuffer);
	const imageData = Buffer.from(imageArray);
	// Convert to base64
	const imageBase64 = imageData.toString('base64');

	const result = await pushCloudinary(fileName, imageBase64);
	const imageUrl = result.secure_url;

	return imageUrl;
};

// Multiple images, imageFiles from formData
export const uploadImages = async (imageFiles: File[], fileName: string) => {
	const imageUrls = [];

	// Pass imageFiles data to images
	const images = imageFiles;

	for (const imageFile of images) {
		const imageBuffer = await imageFile.arrayBuffer();
		const imageArray = Array.from(new Uint8Array(imageBuffer));
		const imageData = Buffer.from(imageArray);
		// Convert to base64
		const imageBase64 = imageData.toString('base64');
		// Make request to clodinary
		const result = await pushCloudinary(fileName, imageBase64);
		imageUrls.push(result.secure_url);
	}
	return imageUrls;
};

const pushCloudinary = async (fileName: string, imageBase64: string) => {
	const result = await cloudinary.uploader.upload(
		`data:image/png;base64,${imageBase64}`,
		{
			folder: `next-aloha-estate/${fileName}`,
		}
	);
	return result;
};
