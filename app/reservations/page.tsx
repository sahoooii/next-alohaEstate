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
import Link from 'next/link';
import { fetchReservations } from '@/actions/ReservationsAction';

const ReservationsPage = async () => {
	const reservations = await fetchReservations();
	// console.log(reservations);
	if (reservations.length === 0)
		return (
			<EmptyList
				heading='No reservations'
				message='Search your favorite property and stay there'
			/>
		);

	return (
		<div className='container mt-8'>
			<h4 className='mb-4 capitalize font-mono text-xl'>
				Woo Hoo! Your have {formatQuantity(reservations.length, 'reservation')}
			</h4>
			<Table>
				<TableCaption>A list of your recent reservations</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Property Name</TableHead>
						<TableHead>Location</TableHead>
						<TableHead>Check In</TableHead>
						<TableHead>Check Out</TableHead>
						<TableHead>Nights</TableHead>
						<TableHead>Order Total</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{reservations.map((reservation) => {
						const {
							_id,
							orderTotal,
							totalNights,
							checkIn,
							checkOut,
						} = reservation;

						const bookingId = _id.toString();

						const startDate = formatDate(checkIn);
						const endDate = formatDate(checkOut);

						return (
							<TableRow key={bookingId}>
								{/* If owner deleted property */}
								{reservation.propertyId === null ? (
									<>
										<TableCell>
											<p className='text-gray-500'>! Owner deleted some reason</p>
										</TableCell>
										<TableCell>
											<p></p>
										</TableCell>
									</>
								) : (
									<>
										<TableCell>
											<Link
												href={`/properties/${reservation.propertyId._id}`}
												className='underline tracking-wide'
											>
												{reservation.propertyId.name}
											</Link>
										</TableCell>
										<TableCell>
											{reservation.propertyId.location.city}
										</TableCell>
									</>
								)}
								<TableCell>{startDate}</TableCell>
								<TableCell>{endDate}</TableCell>
								<TableCell>{formatQuantity(totalNights, 'night')}</TableCell>

								<TableCell>{formatCurrency(orderTotal)}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

export default ReservationsPage;
