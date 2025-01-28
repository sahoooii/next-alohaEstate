import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema(
	{
		profileId: {
			type: Schema.Types.ObjectId,
			ref: 'Profile',
		},
		fullName: {
			type: String,
		},
		profileImage: {
			type: String,
		},
		rating: {
			type: Number,
			min: 1,
			max: 5,
			required: true,
			// default: 3,
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
		// Who made this property info will delete?
		owner: {
			type: Schema.Types.ObjectId,
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
		averageRating: {
			type: Number,
			required: true,
			default: 0,
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0,
		},
		reviews: [reviewSchema],
	},
	{
		timestamps: true,
	}
);

const Property = models.Property || model('Property', PropertySchema);

export default Property;
