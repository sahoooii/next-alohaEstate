import { Skeleton } from '../ui/skeleton';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';

export const LoadingCards = () => {
	return (
		<div className='container mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3'>
			<SkeltonCard />
			<SkeltonCard />
			<SkeltonCard />
		</div>
	);
};

export const FeaturedLoadingCards = () => {
	return (
		<div className='container mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
			<SkeltonFeaturedCard />
			<SkeltonFeaturedCard />
		</div>
	);
};

export const RecentLoadingCards = () => {
	return (
		<div className='container mt-8 gap-8 grid sm:grid-cols-3 lg:grid-cols-3'>
			<SkeltonRecentCard />
			<SkeltonRecentCard />
			<SkeltonRecentCard />
		</div>
	);
};

export const SkeltonCard = () => {
	return (
		<Card className='h-[450px]'>
			<CardHeader>
				<div className='bg-white rounded-xl shadow-lg h-[250px] relative'>
					<div className='absolute top-5 right-5 z-5'>
						<Skeleton className='w-10 h-10 rounded-full' />
					</div>
					<div className='absolute top-7 left-5 z-5'>
						<Skeleton className='w-20 h-7 rounded-sm' />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className='py-2 bg-white rounded-xl shadow-lg h-[120px]'>
					<div className='flex flex-col gap-y-2 p-2'>
						<Skeleton className='w-3/5 h-3' />
						<Skeleton className='w-full h-6' />
						<Skeleton className='w-4/5 h-3 mt-2' />
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export const SkeltonFeaturedCard = () => {
	return (
		<div className='flex flex-col lg:flex-row mb-4'>
			<Skeleton className='lg:h-[214px] h-[300px] w-full rounded-t-xl' />
			<div>
				<Skeleton className='h-7 mt-2 w-3/4' />
				<Skeleton className='h-5 mt-2 w-1/2' />
				<Skeleton className='h-4 mt-2 w-full' />
			</div>
		</div>
	);
};

export const SkeltonRecentCard = () => {
	return (
		<div className='flex flex-col lg:flex-row mb-4'>
			<Skeleton className='lg:h-[350px] h-[300px] w-full rounded-t-xl mb-2' />
			<div>
				<Skeleton className='h-7 mt-2 w-3/4' />
				<Skeleton className='h-5 mt-2 w-1/2' />
				<Skeleton className='h-4 mt-2 w-full' />
			</div>
		</div>
	);
};

export const ReviewLoadingCard = () => {
	return (
		<Card className='h-[150px]'>
			<CardHeader>
				<div className='flex items-center'>
					<Skeleton className='w-20 h-20 rounded-sm' />
					<div className='ml-4'>
						<Skeleton className='w-[150px] h-6 mb-2' />
						<Skeleton className='w-[100px] h-4' />
					</div>
				</div>
			</CardHeader>
		</Card>
	);
};

export const MessageLoadingCard = () => {
	return (
		<Card className='h-[300px]'>
			<CardHeader>
				<div className='flex items-center'>
					<Skeleton className='w-20 h-20 rounded-full' />
					<div className='ml-4'>
						<Skeleton className='w-[150px] h-6 mb-2' />
						<Skeleton className='w-[100px] h-4' />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className='py-5 px-3 bg-white rounded-xl shadow-lg h-[100px]'>
					<div className='flex flex-col gap-y-2 p-2'>
						<Skeleton className='w-3/5 h-2' />
						<Skeleton className='w-4/5 h-2' />
						<Skeleton className='w-full h-6' />
					</div>
				</div>
			</CardContent>
			<CardFooter className='flex justify-end p-2'>
				<Skeleton className='w-1/3 h-6' />
			</CardFooter>
		</Card>
	);
};

export const CreateLoadingCard = () => {
	return (
		<div className='container mt-8'>
			<div className='grid md:grid-cols-2 gap-8 mb-4'>
				<Skeleton className='w-full h-10' />
				<Skeleton className='w-full h-10' />
				<Skeleton className='w-full h-10' />
				<Skeleton className='w-full h-10' />
			</div>
			<Skeleton className='w-full h-40' />
			<div className='pb-3 mt-6 bg-white rounded-xl shadow-lg'>
				<div className='grid md:grid-cols-2 gap-2 md:gap-4 mb-6 py-4 px-4'>
					<Skeleton className='w-full h-10' />
					<Skeleton className='w-full h-10' />
					<Skeleton className='w-full h-10' />
					<Skeleton className='w-full h-10' />
				</div>
			</div>
		</div>
	);
};

export const EditPropertyLoadingCard = () => {
	return (
		<div className='container mt-8'>
			<div className='flex justify-between gap-1 md:gap-2 items-center w-full'>
				<Skeleton className='w-10 h-10 rounded-full' />
				<Skeleton className='h-[350px] md:h-[450px] lg:h-[550px] md:w-[80%] w-[90%] mx-auto' />
				<Skeleton className='w-10 h-10 rounded-full' />
			</div>
			<Skeleton className='w-[150px] md:w-[25%] h-5 mx-auto mt-4' />
			<div className='py-6 grid grid-cols-2 gap-3'>
				<Skeleton className='w-full h-10' />
				<Skeleton className='w-full h-10' />
				<Skeleton className='w-full h-10' />
				<Skeleton className='w-full h-10' />
			</div>
		</div>
	);
};

export const ProfileLoadingCard = () => {
	return (
		<div className='container mt-10 mb-24'>
			<div className='border px-6 pt-12 pb-20'>
				<div className='flex items-center justify-center'>
					<Skeleton className='w-28 h-28 rounded-full' />
				</div>
				<Skeleton className='w-[150px] md:w-[20%] h-8 mx-auto mt-4' />
				<div className='py-6 grid grid-cols-2 gap-4'>
					<Skeleton className='w-full h-10' />
					<Skeleton className='w-full h-10' />
					<Skeleton className='w-full h-10' />
				</div>
				<Skeleton className='w-[200px] md:w-[30%] h-8 mx-auto mt-4' />
			</div>
		</div>
	);
};
