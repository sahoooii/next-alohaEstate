'use server';

import connectDB from '@/config/database';
import { getAdminUser } from './AuthUserAction';
import Profile from '@/models/Profile';
import Property from '@/models/Property';
import Booking from '@/models/Booking';
import { formatDate } from '@/utils/format';

export const fetchStats = async () => {
	await connectDB();
	await getAdminUser();

	const usersCount = await Profile.countDocuments();
	const propertiesCount = await Property.countDocuments();
	const bookingsCount = await Booking.countDocuments({ paymentStatus: true });

	return { usersCount, propertiesCount, bookingsCount };
};

export const fetchChartsData = async () => {
	await connectDB();
	await getAdminUser();

	const date = new Date();
	date.setMonth(date.getMonth() - 6);
	const sixMonthAgo = date;

	const bookings = await Booking.find({
		paymentStatus: true,
		createdAt: { $gte: sixMonthAgo },
	}).sort({ createdAt: 1 });

	// Count how many bookings per month
	const bookingsPerMonth = bookings.reduce((total, current) => {
		const date = formatDate(current.createdAt, true);
		const existingEntry = total.find(
			(entry: { date: string }) => entry.date === date
		);
		if (existingEntry) {
			existingEntry.count += 1;
		} else {
			total.push({ date, count: 1 });
		}
		return total;
	}, [] as Array<{ date: string; count: number }>);

	return bookingsPerMonth;
};
