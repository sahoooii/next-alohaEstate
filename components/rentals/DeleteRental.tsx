import FormContainer from '../form/FormContainer';
import IconButton from '../form/IconButton';
import { deleteRentalAction } from '@/actions/MyRentalsAction';

const DeleteRental = ({ propertyId }: { propertyId: string }) => {
	const deleteRental = deleteRentalAction.bind(null, { propertyId });
	return (
		<FormContainer action={deleteRental}>
			<IconButton actionType='delete' />
		</FormContainer>
	);
};

export default DeleteRental;
