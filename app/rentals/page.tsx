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
import { fetchRentals } from '@/actions/MyRentalsAction';
import { formatCurrency, formatQuantity } from '@/utils/format';
import IconButton from '@/components/form/IconButton';
import DeleteRental from '@/components/rentals/DeleteRental';

const RentalsPage = async () => {
	const rentals = await fetchRentals();

	if (rentals.length === 0) {
		return (
			<EmptyList
				heading='No Rentals property'
				message='Do you want to rental your property?'
			/>
		);
	}

	return (
		<div className='container mt-8'>
			<h4 className='mb-4 capitalize font-mono text-xl'>
				Active Properties: {formatQuantity(rentals.length, 'rental')}
			</h4>
			<Table>
				<TableCaption>A list of all your properties</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Property Name</TableHead>
						<TableHead>Nightly Rate</TableHead>
						<TableHead>Nights Booked</TableHead>
						<TableHead>Total Income</TableHead>
						<TableHead>Manage</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{rentals.map((rental) => {
						const { _id, name, price } = rental.rental;
						const propertyId = _id.toString();
						const { totalNightsSum, orderTotalSum } = rental;
						const orderTotal = Number(orderTotalSum);
						return (
							<TableRow key={propertyId}>
								<TableCell>
									<Link
										href={`/properties/${propertyId}`}
										className='underline tracking-wide'
									>
										{name}
									</Link>
								</TableCell>
								<TableCell>{formatCurrency(price)}</TableCell>
								<TableCell>{totalNightsSum || 0}</TableCell>
								<TableCell>{formatCurrency(orderTotal)}</TableCell>
								<TableCell className='flex items-center gap-x-2'>
									<Link href={`/rentals/${propertyId}/edit`}>
										<IconButton actionType='edit' />
									</Link>
									<DeleteRental propertyId={propertyId} />
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

export default RentalsPage;
