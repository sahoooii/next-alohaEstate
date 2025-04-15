'use client';

import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
	return (
		<div className='container mt-8'>
			<div className='pb-4 flex justify-between'>
				<Skeleton className='w-3/5 h-10' />
				<div className='flex justify-between gap-5'>
					<Skeleton className='w-10 h-10 rounded-sm' />
					<Skeleton className='w-10 h-10 rounded-full' />
				</div>
			</div>
			<div className='pb-4 grid grid-cols-1 gap-2'>
				<Skeleton className='w-4/5 h-5' />
				<Skeleton className='w-3/5 h-5' />
			</div>
			<Skeleton className='h-[300px] md:h-[400px] w-full rounded' />
			<div className='py-4 grid grid-cols-1 gap-2'>
				<Skeleton className='w-4/5 h-5' />
				<Skeleton className='w-3/5 h-5' />
			</div>
		</div>
	);
};

export default loading;
