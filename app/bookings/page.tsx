import Link from 'next/link';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import EmptyList from '@/components/properties/EmptyList';
import { formatCurrency, formatDate, formatQuantity } from '@/utils/format';
import { fetchBookings } from '@/actions/BookingAction';
import DeleteBooking from '@/components/booking/DeleteBooking';

const BookingPage = async () => {
	const bookings = await fetchBookings();

	if (bookings.length === 0)
		return (
			<EmptyList
				heading='No Booking'
				message='Search your favorite property and stay there'
			/>
		);

	return (
		<div className='container mt-8'>
			<h4 className='mb-4 capitalize font-mono text-xl'>
				You have {formatQuantity(bookings.length, 'booking')}
			</h4>
			<Table>
				<TableCaption>A list of your recent bookings</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Property Name</TableHead>
						<TableHead>Location</TableHead>
						<TableHead>Check In</TableHead>
						<TableHead>Check Out</TableHead>
						<TableHead>Nights</TableHead>
						<TableHead>Order Total</TableHead>
						<TableHead>Cancel</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{bookings.map((booking) => {
						const {
							propertyId,
							_id,
							orderTotal,
							totalNights,
							checkIn,
							checkOut,
						} = booking;

						// When owner deleted property
						if (propertyId === null) return;

						const bookingId = _id.toString();

						const { _id: property, location, name } = propertyId;
						const { city } = location;

						const startDate = formatDate(checkIn);
						const endDate = formatDate(checkOut);

						return (
							<TableRow key={bookingId}>
								<TableCell>
									<Link
										href={`/properties/${property}`}
										className='underline tracking-wide'
									>
										{name}
									</Link>
								</TableCell>
								<TableCell>{city}</TableCell>
								<TableCell>{startDate}</TableCell>
								<TableCell>{endDate}</TableCell>
								<TableCell>{formatQuantity(totalNights, 'night')}</TableCell>

								<TableCell>{formatCurrency(orderTotal)}</TableCell>
								<TableCell>
									<DeleteBooking bookingId={bookingId} />
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

export default BookingPage;
