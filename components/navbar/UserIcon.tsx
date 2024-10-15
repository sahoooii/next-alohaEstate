import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions/ProfileActions';

const UserIcon = async () => {
	const profileImage = await fetchProfileImage();

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
	return <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white' />;
};

export default UserIcon;
