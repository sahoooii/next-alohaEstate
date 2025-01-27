import FormContainer from '@/components/form/FormContainer';
import FormInput from '../form/FormInput';
import TextAreaInput from '../form/TextAreaInput';
import { SubmitButton } from '../form/Buttons';
import { sendMessageAction } from '@/actions/MessageAction';

const MessageForm = ({
	ownerId,
	propertyId,
}: {
	ownerId: string;
	propertyId: string;
}) => {
	return (
			<div className='bg-white p-8 rounded-lg shadow-md mt-4'>
				<FormContainer action={sendMessageAction}>
					<div className='grid gap-6 mb-4 w-[250px]'>
						<input name='recipient' type='hidden' value={ownerId} />
						<input name='propertyId' type='hidden' value={propertyId} />
						<FormInput
							name='name'
							type='text'
							label='Name'
							placeholder='Your name is ...'
						/>
						<FormInput
							name='email'
							type='email'
							label='E-mail'
							placeholder='Your email...'
						/>
						<TextAreaInput
							name='message'
							labelText='Message (5 - 3000 words)'
							placeholder='ex: I have a question ...'
						/>
					</div>
					<div className='flex justify-center'>
						<SubmitButton
							text='submit'
							className='w-full md:w-[60%] mt-12 bg-gray-700 hover:bg-gray-400'
						/>
					</div>
				</FormContainer>
			</div>
	);
};

export default MessageForm;
