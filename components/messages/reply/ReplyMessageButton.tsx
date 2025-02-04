import ReplyMessageForm from './ReplyMessageForm';
import { ReplyMessageProps } from '@/utils/types';
import MessageToggleButton from '../MessageToggleButton';

const ReplyMessageButton = ({ replyMessage }: ReplyMessageProps) => {

	return (
		<MessageToggleButton actionType='reply'>
			<ReplyMessageForm replyMessage={replyMessage} />
		</MessageToggleButton>
	);
};

export default ReplyMessageButton;
