import { markMessagesAsRead } from '@/actions/MessageAction';
import FormContainer from '../form/FormContainer';
import { MarkAsReadButton } from './MarkAsReadButton';

const MarkAsReadContainer =  ({
	senderId,
	propertyId,
}: {
	senderId: string;
	propertyId: string;
}) => {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const markAsRead = async (prevState: unknown, formData: FormData) => {
	'use server';
	await markMessagesAsRead(senderId, propertyId);
	return { message: 'You read all messages!' };
};

return (
		<FormContainer action={markAsRead}>
			<MarkAsReadButton />
		</FormContainer>
	);
};

export default MarkAsReadContainer;
