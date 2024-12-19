import Image from 'next/image';
import Link from 'next/link';
import { IoLogoWechat } from 'react-icons/io5';

type UserInfo = {
	profile: {
		profileImage: string;
		fullName: string;
	};
};

const UserInfo = ({ profile: { profileImage, fullName } }: UserInfo) => {
	return (
		<article className='grid grid-cols-[auto,1fr] gap-4 mt-4 items-center'>
			<Image
				src={profileImage}
				alt={fullName}
				width={50}
				height={50}
				className='rounded-md w-12 h-12 object-cover'
			/>
			<div>
				<div className='flex capitalize mb-1'>
					<p>hosted by</p>
					<p className='ml-2 font-bold'>{fullName}</p>
				</div>
				<Link href='/messages' className='flex items-center ext-gray-600'>
					<IoLogoWechat className='text-gray-600' size={24} />
					<p className='ml-2'>Send a message</p>
				</Link>
			</div>
		</article>
	);
};

export default UserInfo;
