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
import Stats from '@/components/booking/Stats';

const BookingPage = async () => {
	const bookings = await fetchBookings();

	if (bookings.length === 0)
		return (
			<EmptyList
				heading='No Booking'
				message='Search your favorite property and stay there'
			/>
		);

	// order date =createdAt
	return (
		<div className='container mt-8'>
			<div className='mb-6'>
				<h4 className='capitalize font-mono text-xl text-primary mb-2'>
					Woo Hoo! You have {formatQuantity(bookings.length, 'booking')}
				</h4>
				<Stats />
			</div>

			<Table className='mt-10 mb-24'>
				<TableCaption>A list of your recent bookings</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Property Name</TableHead>
						<TableHead>Location</TableHead>
						<TableHead>Check In</TableHead>
						<TableHead>Check Out</TableHead>
						<TableHead>Nights</TableHead>
						<TableHead>Order Total</TableHead>
						<TableHead>Order Date</TableHead>
						<TableHead>Delete/Cancel</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{bookings.map((booking) => {
						const {
							_id,
							orderTotal,
							totalNights,
							checkIn,
							checkOut,
							createdAt,
						} = booking;

						const bookingId = _id.toString();

						const startDate = formatDate(checkIn);
						const endDate = formatDate(checkOut);
						const orderDate = formatDate(createdAt);

						return (
							<TableRow key={bookingId}>
								{/* If owner deleted property */}
								{booking.propertyId === null ? (
									<>
										<TableCell>
											<p className='text-gray-500'>
												! Owner deleted some reasons
											</p>
										</TableCell>
										<TableCell>
											<p></p>
										</TableCell>
									</>
								) : (
									<>
										<TableCell>
											<Link
												href={`/properties/${booking.propertyId._id}`}
												className='underline tracking-wide'
											>
												{booking.propertyId.name}
											</Link>
										</TableCell>
										<TableCell>{booking.propertyId.location.city}</TableCell>
									</>
								)}
								<TableCell>{startDate}</TableCell>
								<TableCell>{endDate}</TableCell>
								<TableCell>{formatQuantity(totalNights, 'night')}</TableCell>

								<TableCell>{formatCurrency(orderTotal)}</TableCell>
								<TableCell>{orderDate}</TableCell>
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
