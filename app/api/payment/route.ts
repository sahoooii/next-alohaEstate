import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

import { type NextRequest, type NextResponse } from 'next/server';
import { formatDate } from '@/utils/format';
import connectDB from '@/config/database';
import Booking from '@/models/Booking';

export const POST = async (req: NextRequest, res: NextResponse) => {
	await connectDB();

	const requestHeaders = new Headers(req.headers);
	const origin = requestHeaders.get('origin');

	const { bookingId } = await req.json();

	const booking = await Booking.findOne({ _id: bookingId }).populate(
		'propertyId',
		{
			name: 1,
			images: 1,
		}
	);

	if (!booking) {
		return Response.json(null, {
			status: 404,
			statusText: 'Your booking is not found',
		});
	}

	const {
		_id,
		totalNights,
		orderTotal,
		checkIn,
		checkOut,
		propertyId: { name, images },
	} = booking;

	try {
		const session = await stripe.checkout.sessions.create({
			ui_mode: 'embedded',
			metadata: { bookingId: _id.toString() },
			line_items: [
				{
					quantity: 1,
					price_data: {
						currency: 'usd',
						product_data: {
							name: `${name}`,
							images: [images[0]],
							description: `Have fun this wonderful place for ${totalNights} nights, from ${formatDate(
								checkIn
							)} to ${formatDate(checkOut)}. Aloha!`,
						},
						unit_amount: orderTotal * 100,
					},
				},
			],
			mode: 'payment',
			return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
		});
		return Response.json({ clientSecret: session.client_secret });
	} catch (error) {
		console.log(error);
		return Response.json(null, {
			status: 500,
			statusText: 'Internal Server Error',
		});
	}
};
