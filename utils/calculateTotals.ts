import { calculateDaysBetween } from './calendar';

type BookingDetails = {
	checkIn: Date;
	checkOut: Date;
	price: number;
};

export const calculateTotals = ({
	checkIn,
	checkOut,
	price,
}: BookingDetails) => {
	const totalNights = calculateDaysBetween({ checkIn, checkOut });

	const subTotal = totalNights * price;
	const cleaningFee = 20;
	const serviceFee = 25;
	const tax = subTotal * 0.1;

	const orderTotal = subTotal + cleaningFee + serviceFee + tax;

	return { totalNights, subTotal, cleaningFee, serviceFee, tax, orderTotal };
};
