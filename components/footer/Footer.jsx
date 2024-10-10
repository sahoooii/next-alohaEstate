import Image from 'next/image';
import logoBg from '@/assets/images/logo-no-background.png';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-blue-200 py-4 md:py-6 absolute bottom-0 w-full'>
			<div className='container mx-auto flex flex-col justify-center items-center'>
				<Image
					className='md:h-20 h-16 w-auto mb-1 md:mb-2'
					src={logoBg}
					alt='AlohaEstate Logo'
				/>
				<p className='text-sm text-slate-500 mt-2 md:mt-0'>
					&copy; {currentYear} AlohaEstate. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
