import { Schema, model, models } from 'mongoose';

const repliedMessageSchema = new Schema(
	{
		youGotReplied: {
			type: Boolean,
			default: false,
		},
		youGotRepliedMessage: {
			type: String,
		},
		sender: {
			type: Schema.Types.ObjectId,
			ref: 'Profile',
		},
		recipient: {
			type: Schema.Types.ObjectId,
			ref: 'Profile',
		},
	},
	{
		timestamps: true,
	}
);


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
		email: {
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
		// save on sender data
		senderMessageId: {
			type: Schema.Types.ObjectId,
		},
		repliedMessage: [repliedMessageSchema],
	},
	{
		timestamps: true,
	}
);

const Message = models.Message || model('Message', MessageSchema);

export default Message;
