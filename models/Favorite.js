import { Schema, model, models } from 'mongoose';

const FavoriteSchema = new Schema(
	{
		profileId: {
			type: String,
			ref: 'Profile',
		},
		propertyId: {
			type: Schema.Types.ObjectId,
			ref: 'Property',
		},
	},
	{
		timestamps: true,
	}
);

const Favorite = models.Favorite || model('Favorite', FavoriteSchema);

export default Favorite;
