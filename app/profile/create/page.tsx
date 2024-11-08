import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';
import { createProfileAction } from '@/actions/ProfileActions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const CreateProfilePage = async () => {
	const user = await currentUser();
	// If user already have a profile, redirect to home
	if (user?.privateMetadata?.hasProfile) redirect('/');

	return (
		<section className='container py-10'>
			<h1 className='text-2xl font-mono mb-8 capitalize'>new user</h1>
			<div className='border p-8 rounded-md'>
				<FormContainer action={createProfileAction}>
					<div className='grid md:grid-cols-2 gap-4 mt-4'>
						<FormInput type='text' name='firstName' label='first name' />
						<FormInput type='text' name='lastName' label='last name' />
						<FormInput type='text' name='username' label='username' />
					</div>
					<SubmitButton
						text='create profile'
						className='mt-8 w-full md:w-[50%]'
					/>
				</FormContainer>
			</div>
		</section>
	);
};

export default CreateProfilePage;
