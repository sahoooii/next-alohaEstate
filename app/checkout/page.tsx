'use client';

import axios from 'axios';
import React, { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutPage = () => {
	const searchParams = useSearchParams();
	const bookingId = searchParams.get('bookingId');

	const fetchClientSecret = useCallback(async () => {
		const response = await axios.post('/api/payment', { bookingId: bookingId });
		return response.data.clientSecret;
	}, [bookingId]);

	const options = { fetchClientSecret };
	return (
		<div id='checkout' className='mb-32'>
			<EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
				<EmbeddedCheckout />
			</EmbeddedCheckoutProvider>
		</div>
	);
};

export default CheckoutPage;
