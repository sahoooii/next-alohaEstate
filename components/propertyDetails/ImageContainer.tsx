import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

const ImageContainer = ({
	images,
	name,
}: {
	images: string[];
	name: string;
}) => {

	return (
		<section className='relative mt-8'>
			<Carousel opts={{ loop: true }} className='mt-[2rem]'>
				<CarouselContent>
					{images.map((image: string, index: number) => (
						<CarouselItem
							key={index}
							className='flex justify-center items-center'
						>
							<div className='w-full lg:w-[80%]'>
								<Card className='h-[380px] md:h-[450px] lg:h-[550px]'>
									<CardContent className='flex items-center justify-center p-0'>
										<Image
											src={image}
											width={0}
											height={0}
											sizes='100vw'
											alt={name}
											className='object-cover rounded h-[380px] md:h-[450px] lg:h-[550px] w-full'
										/>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='absolute left-[2rem] top-1/2 transform -translate-y-1/2 z-10' />
				<CarouselNext className='absolute right-[2rem] top-1/2 transform -translate-y-1/2 z-10' />
			</Carousel>
		</section>
	);
};

export default ImageContainer;
