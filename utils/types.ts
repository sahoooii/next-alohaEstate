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
	recipient: string;
	property: {
		_id: string;
		name: string;
	};
	name: string;
	email: string;
	message: string;
	submitted: boolean;
	read: boolean;
	createdAt: Date;
	updateAt: Date;
};
