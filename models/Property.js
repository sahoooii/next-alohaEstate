import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema(
	{
		profileId: {
			type: String,
			ref: 'Profile',
		},
		name: {
			type: String,
			unique: true,
			required: true,
		},
		profileImage: {
			type: String,
		},
		rating: {
			type: Number,
			min: 1,
			max: 5,
			required: true,
			default: 3,
		},
		comment: {
			type: String,
			min: 10,
			max: 1000,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const PropertySchema = new Schema(
	{
		// Who made this property info
		owner: {
			type: String,
			ref: 'Profile',
		},
		name: {
			type: String,
			required: true,
		},
		tagline: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		images: [
			{
				type: String,
				// type: [String],
			},
		],
		location: {
			street: {
				type: String,
				required: true,
			},
			city: {
				type: String,
				required: true,
			},
			state: {
				type: String,
				required: true,
			},
			zipcode: {
				type: String,
				required: true,
			},
		},
		guests: {
			type: Number,
			required: true,
		},
		bedrooms: {
			type: Number,
			required: true,
		},
		beds: {
			type: Number,
			required: true,
		},
		baths: {
			type: Number,
			required: true,
		},
		amenities: [
			{
				type: String,
			},
		],
		reviews: [reviewSchema],
		// is_featured: {
		// 	type: Boolean,
		// 	default: false,
		// },
	},
	{
		timestamps: true,
	}
);

const Property = models.Property || model('Property', PropertySchema);

export default Property;
