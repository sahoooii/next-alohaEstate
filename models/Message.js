import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema(
	{
		sender: {
			type: Schema.Types.ObjectId,
			ref: 'Profile',
			required: true,
		},
		recipient: {
			type: Schema.Types.ObjectId,
			ref: 'Profile',
			required: true,
		},
		propertyId: {
			type: Schema.Types.ObjectId,
			ref: 'Property',
		},
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
		},
		body: {
			type: String,
		},
		read: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Message = models.Message || model('Message', MessageSchema);

export default Message;
