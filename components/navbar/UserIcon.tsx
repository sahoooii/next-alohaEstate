import { LuUser2 } from 'react-icons/lu';

const UserIcon = ({ profileImage }: { profileImage?: string }) => {
	if (profileImage) {
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img
				src={profileImage}
				alt='profileImage'
				className='w-7 h-7 rounded-full object-cover'
			/>
		);
	}
	return <LuUser2 className='w-6 h-6 rounded-full text-white bg-primary' />;
};

export default UserIcon;
