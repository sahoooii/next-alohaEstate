import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import SubmitButton from '@/components/form/SubmitButton';
import {
	fetchProfile,
	updateProfileAction,
	updateProfileImageAction,
} from '@/actions/ProfileActions';
import ImageInputContainer from '@/components/form/ImageInputContainer';

const ProfilePage = async () => {
	const profile = await fetchProfile();

	return (
		<section className='container pt-10 pb-28 sm:pb-16 md:pb-32'>
			<h1 className='text-2xl font-mono mb-8 capitalize'>user profile</h1>
			<div className='border p-8 rounded-md'>
				{/* User profile image */}
				<div className='items-center flex justify-center'>
					<ImageInputContainer
						image={profile.profileImage}
						name={profile.username}
						action={updateProfileImageAction}
						text='Change Profile Photo'
						style='items-center flex flex-col justify-center'
					/>
				</div>
				<FormContainer action={updateProfileAction}>
					<div className='grid md:grid-cols-2 gap-4 mt-4'>
						<FormInput
							type='text'
							name='firstName'
							label='first name'
							defaultValue={profile.firstName}
						/>
						<FormInput
							type='text'
							name='lastName'
							label='last name'
							defaultValue={profile.lastName}
						/>
						<FormInput
							type='text'
							name='username'
							label='username'
							defaultValue={profile.username}
						/>
					</div>
					<div className='flex justify-center'>
						<SubmitButton
							text='update profile'
							className='mt-8 w-full md:w-[50%]'
						/>
					</div>
				</FormContainer>
			</div>
		</section>
	);
};

export default ProfilePage;
