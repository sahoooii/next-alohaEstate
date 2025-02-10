import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { fetchRepliedMessage } from '@/actions/MessageAction';
import { MdOutlineReply } from 'react-icons/md';

const RepliedMessageForm = async ({ messageId }: { messageId: string }) => {
	const message = await fetchRepliedMessage(messageId);
	// console.log('reply:', message[0].repliedMessage[0]);

	const sender = message[0].repliedMessage[0].sender;
	const recipient = message[0].repliedMessage[0].recipient;
	return (
		<Card className='p-1 mt-4'>
			<CardHeader className='text-xl'>
				<div className='flex items-center gap-x-4'>
					<Image
						src={recipient.profileImage}
						width={50}
						height={50}
						alt={recipient.firstName}
						className='rounded-full object-cover w-[50px] h-[50px]'
					/>
					<h3 className='text-base font-bold capitalize mb-1'>
						To: {sender.firstName} {sender.lastName}
					</h3>
				</div>
			</CardHeader>
			<CardContent>
				<div className='mb-4 py-5 px-3 bg-white rounded-xl shadow-lg'>
					<div className='flex items-center gap-2 mb-1'>
						<MdOutlineReply className='text-primary mr-1' size={24} />
						<p className='text-xs text-muted-foreground'>
							{new Date(
								message[0].repliedMessage[0].createdAt
							).toLocaleString()}
						</p>
					</div>
					<div>
						<p className='text-gray-700'>
							{message[0].repliedMessage[0].youGotRepliedMessage}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default RepliedMessageForm;
