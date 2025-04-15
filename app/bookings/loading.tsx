'use client';

import LoadingTable from '@/components/booking/LoadingTable';
import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
	return (
		<div className='container mt-8'>
			<div className='mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3 mb-3'>
				<Skeleton className='w-full h-24 rounded' />
				<Skeleton className='w-full h-24 rounded' />
				<Skeleton className='w-full h-24 rounded' />
			</div>
			<LoadingTable />
		</div>
	);
};

export default loading;
