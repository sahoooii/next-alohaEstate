import {
	fetchRentalDetails,
} from '@/actions/MyRentalsAction';
import { redirect } from 'next/navigation';
import EditPropertyClient from './EditPropertyClient';

const EditPropertyContainer = async ({ id }: { id: string }) => {
	const property = await fetchRentalDetails(id);
	// console.log(property);
	const safeProperty = JSON.parse(JSON.stringify(property));

	if (!property) redirect('/');

	return <EditPropertyClient property={safeProperty} />;
};

export default EditPropertyContainer;
