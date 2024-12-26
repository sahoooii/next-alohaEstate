import { Schema, model, models } from 'mongoose';

const bookingSchema = new Schema(
	{
		profileId: {
			type: Schema.Types.ObjectId,
			ref: 'Profile',
		},
		propertyId: {
			type: Schema.Types.ObjectId,
			ref: 'Property',
		},
		orderTotal: {
			type: Number,
		},
		totalNights: {
			type: Number,
		},
		checkIn: {
			type: Date,
		},
		checkOut: {
			type: Date,
		},
		paymentStatus: {
			type: Boolean,
		},
	},
	{
		timestamps: true,
	}
);

const Booking = models.Booking || model('Booking', bookingSchema);

export default Booking;
