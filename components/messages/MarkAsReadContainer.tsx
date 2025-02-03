import FormContainer from '../form/FormContainer';
import { markAsReadAction } from '@/actions/MessageAction';
import { MarkAsReadButton } from './MarkAsReadButton';

const MarkAsReadContainer = ({ messageId }: { messageId: string }) => {
	const markAsRead = markAsReadAction.bind(null, {
		messageId,
	});

	return (
		<FormContainer action={markAsRead}>
			<MarkAsReadButton />
		</FormContainer>
	);
};

export default MarkAsReadContainer;
