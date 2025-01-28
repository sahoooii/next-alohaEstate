import Image from 'next/image';
import logoBg from '@/assets/images/logo-no-background.png';

const Hero = () => {
	return (
		<section className='bg-blue-400 pb-12 pt-12 md:pb-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
				<Image
					className='h-32 w-auto mb-2'
					src={logoBg}
					alt='AlohaEstate Logo'
				/>

				<div className='text-center'>
					<h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
						Find The Perfect Vacation
					</h1>
					<p className='my-4 text-xl text-white'>
						Stay like loco, Chill all day with Aloha splits
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
