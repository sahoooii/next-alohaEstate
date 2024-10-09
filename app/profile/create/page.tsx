import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import SubmitButton from '@/components/form/SubmitButton';

const createProfileAction = async (prevState: unknown, formData: FormData) => {
	'use server';
	const firstName = formData.get('firstName') as string;
	console.log(firstName);
	return { message: 'Profile created successfully' };
};

const CreateProfilePage = () => {
	return (
		<section>
			<h1 className='text-2xl font-mono mb-8 capitalize'>new user</h1>
			<div className='border p-8 rounded-md'>
				<FormContainer action={createProfileAction}>
					<div className='grid md:grid-cols-2 gap-4 mt-4'>
						<FormInput type='text' name='firstName' label='first name' />
						<FormInput type='text' name='lastName' label='last name' />
						<FormInput type='text' name='username' label='username' />
					</div>
					<SubmitButton text='create profile' className='mt-8' />
				</FormContainer>
			</div>
		</section>
	);
};

export default CreateProfilePage;
