import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import SubmitButton from '@/components/form/SubmitButton';
import { fetchProfile, updateProfileAction } from '@/actions/ProfileActions';

const ProfilePage = async () => {
	const profile = await fetchProfile();

	return (
		<section className='container py-10'>
			<h1 className='text-2xl font-mono mb-8 capitalize'>user profile</h1>
			<div className='border p-8 rounded-md'>
				{/* Image input container */}
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
					<SubmitButton text='update profile' className='mt-8' />
				</FormContainer>
			</div>
		</section>
	);
};

export default ProfilePage;
