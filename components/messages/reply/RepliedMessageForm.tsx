import {
	Card,
	CardContent,
	CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import { fetchRepliedMessage } from '@/actions/MessageAction';
import { MdOutlineReply } from 'react-icons/md';


const RepliedMessageForm = async ({ repliedId }: { repliedId: string }) => {
	const repliedMessage = await fetchRepliedMessage(repliedId);
	const sender = repliedMessage[0].sender;
	const recipient = repliedMessage[0].recipient;
	return (
		<Card className='p-1 mt-4'>
			<CardHeader className='text-xl'>
				<div className='flex items-center gap-x-4'>
					<Image
						src={sender.profileImage}
						width={50}
						height={50}
						alt={sender.firstName}
						className='rounded-full object-cover'
					/>
					<h3 className='text-base font-bold capitalize mb-1'>
						To: {recipient.firstName} {recipient.lastName}
					</h3>
				</div>
			</CardHeader>
			<CardContent>
				<div className='mb-4 py-5 px-3 bg-white rounded-xl shadow-lg'>
					<div className='flex items-center gap-2 mb-1'>
						<MdOutlineReply className='text-primary mr-1' size={24} />
						<p className='text-xs text-muted-foreground'>
							{new Date(repliedMessage[0].createdAt).toLocaleString()}
						</p>
					</div>
					<div>
						<p className='text-gray-700'>{repliedMessage[0].message}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default RepliedMessageForm;
