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
	location: { city: string };
	guests: number;
	beds: number;
	baths: number;
};

export type PropertyData = {
	owner: string;
	location: { street: string; city: string; state: string; zipcode: string };
	images: string[];
};

// Reviews
export type Reviews = {
	profileId: {
		_id: string;
		username: string;
		profileImage: string;
	};
	rating: number;
	comment: string;
	_id: string;
	createdAt: Date;
};

// Booking
export type DateRangeSelect = {
	startDate: Date;
	endDate: Date;
	key: string;
};

export type Booking = {
	checkIn: Date;
	checkOut: Date;
};

export type MessagesType = {
	_id: string;
	sender: {
		_id: string;
		firstName: string;
		lastName: string;
		profileImage: string;
	};
	recipient: {
		_id: string;
		firstName: string;
		lastName: string;
		profileImage: string;
	};
	property: {
		_id: string;
		name: string;
	};
	name: string;
	message: string;
	submitted: boolean;
	read: boolean;
	createdAt: Date;
	updateAt: Date;
};

export type EditPropertyType = {
	_id: string;
	owner: string;
	name: string;
	tagline: string;
	price: number;
	category: string;
	description: string;
	guests: number;
	bedrooms: number;
	beds: number;
	baths: number;
	amenities: string[];
	location: { street: string; city: string; state: string; zipcode: string };
	images: string[];
};
