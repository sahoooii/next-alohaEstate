import { Schema, model, models } from 'mongoose';

const ProfileSchema = new Schema(
	{
		clerkId: {
			type: String,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
		},
		profileImage: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Profile = models.Profile || model('Profile', ProfileSchema);

export default Profile;
