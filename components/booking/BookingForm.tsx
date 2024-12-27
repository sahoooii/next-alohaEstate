import { calculateTotals } from '@/utils/calculateTotals';
import { formatCurrency } from '@/utils/format';
import { useProperty } from '@/utils/store';
import React from 'react';
import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const BookingForm = () => {
	const { range, price } = useProperty((state) => state);
	const checkIn = range?.from as Date;
	const checkOut = range?.to as Date;

	const { totalNights, subTotal, cleaningFee, serviceFee, tax, orderTotal } =
		calculateTotals({ checkIn, checkOut, price });

	return (
		<Card className='p-8 mb-4'>
			<CardTitle className='mb-5 flex justify-center'>Booking Summary</CardTitle>
			<FormRow label={`$${price} × ${totalNights} Nights`} amount={subTotal} />
			<FormRow label='Cleaning Fee' amount={cleaningFee} />
			<FormRow label='Service Fee' amount={serviceFee} />
			<FormRow label='Tax' amount={tax} />
			<Separator className='mt-4' />
			<CardTitle className='mt-8'>
				<FormRow label='Total' amount={orderTotal} />
			</CardTitle>
		</Card>
	);
};

// Order form
const FormRow = ({ label, amount }: { label: string; amount: number }) => {
	return (
		<p className='flex justify-between text-sm mb-2'>
			<span>{label}</span>
			<span>{formatCurrency(amount)}</span>
		</p>
	);
};

export default BookingForm;
