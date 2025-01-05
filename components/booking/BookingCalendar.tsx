'use client';

import { useEffect, useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { DateRange } from 'react-day-picker';
import { useProperty } from '@/utils/store';
import {
	defaultSelected,
	generateBlockedPeriods,
	generateDateRange,
	generateDisabledDates,
} from '@/utils/calendar';

const BookingCalendar = () => {
	const { toast } = useToast();
	const currentDate = new Date();

	const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

	const bookings = useProperty((state) => state.bookings);
	// console.log(bookings);

	const blockedPeriods = generateBlockedPeriods({
		bookings,
		today: currentDate,
	});

	const unavailableDates = generateDisabledDates(blockedPeriods);

	useEffect(() => {
		const selectedRange = generateDateRange(range);
		// is disabledDateIncluded or not
		selectedRange.some((date) => {
			if (unavailableDates[date]) {
				setRange(defaultSelected);
				toast({
					description: 'Some dates are already booked. Please select again.',
				});
				return true;
			}
			return false;
		});

		useProperty.setState({ range });
	}, [range]);

	return (
		<Calendar
			mode='range'
			defaultMonth={currentDate}
			selected={range}
			onSelect={setRange}
			className='mb-4'
			disabled={blockedPeriods}
		/>
	);
};

export default BookingCalendar;
