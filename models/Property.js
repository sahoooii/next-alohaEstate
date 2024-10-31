import { Schema, model, models } from 'mongoose';

const PropertySchema = new Schema(
	{
		// Who made this property info
		owner: {
			// type: Schema.Types.ObjectId,
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
				type: [String],
				// validate: {
				// 	validator: (v) => v.length <= 4,
				// 	message: (props) =>
				// 		`The images array can contain a maximum of 4 images, but got ${props.value.length}`,
				// },
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
		// amenities: {
		// 	type: String,
		// 	required: true,
		// },
		amenities: [
			{
				type: String,
			},
		],
		is_featured: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Property = models.Property || model('Property', PropertySchema);

export default Property;
