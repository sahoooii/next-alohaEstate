import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema(
	{
		sender: {
			type: Schema.Types.ObjectId,
			ref: 'Profile',
		},
		recipient: {
			type: Schema.Types.ObjectId,
			ref: 'Profile',
		},
		propertyId: {
			type: Schema.Types.ObjectId,
			ref: 'Property',
		},
		name: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		submitted: {
			type: Boolean,
			default: false,
		},
		read: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Message = models.Message || model('Message', MessageSchema);

export default Message;
