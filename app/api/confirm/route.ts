import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';
import connectDB from '@/config/database';
import Booking from '@/models/Booking';

export const GET = async (req: NextRequest) => {
	await connectDB();
	
	const { searchParams } = new URL(req.url);
	const session_id = searchParams.get('session_id') as string;

	try {
		const session = await stripe.checkout.sessions.retrieve(session_id);
		const bookingId = session.metadata?.bookingId;

		if (session.status !== 'complete' || !bookingId) {
			throw new Error('Woops! Something went wrong');
		}

		await Booking.findOneAndUpdate({ _id: bookingId }, { paymentStatus: true });
	} catch (error) {
		console.log(error);
		return Response.json(null, {
			status: 500,
			statusText: 'Internal Server Error',
		});
	}
	redirect('/bookings');
};
