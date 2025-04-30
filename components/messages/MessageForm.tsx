import FormContainer from '@/components/form/FormContainer';
import TextAreaInput from '@/components/form/TextAreaInput';
import { SubmitButton } from '@/components/form/Buttons';
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
					<TextAreaInput
						name='message'
						labelText='Message (10 - 3000 characters)'
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
