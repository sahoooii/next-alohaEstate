import { Skeleton } from '../ui/skeleton';
import { Card, CardHeader } from '@/components/ui/card';

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
		<div>
			<Skeleton className='h-[300px] rounded-md' />
			<Skeleton className='h-4 mt-2 w-3/4' />
			<Skeleton className='h-4 mt-2 w-1/2' />
		</div>
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
}
