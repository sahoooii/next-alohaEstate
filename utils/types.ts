export type actionFunction = (
	prevState: unknown,
	formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardProps = {
	images: string;
	id: string;
	name: string;
	tagline: string;
	price: number;
	location: string[];
};
