'use client';

import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
	return (
		<div className='container mt-8 mb-32'>
			<div className='flex items-center justify-start sm:w-[50%] w-full sm:gap-3 gap-2'>
				<Skeleton className='sm:w-[20%] w-[40%] h-5' />
				<Skeleton className='sm:w-[20%] w-[40%] h-5' />
			</div>
			<Skeleton className='sm:w-[50%] w-[80%] h-10 mt-3 mb-7' />
			{/* Chat page */}
			<div className='md:border md:rounded-md sm:px-5 px-0 py-6 max-w-full md:max-w-5xl mx-auto h-[80vh] flex flex-col justify-between'>
				{/* 上：チャットの一覧（ローディング用） */}
				<div className='overflow-y-auto space-y-6 md:space-y-5 mb-6 pr-1'>
					{/* 受信メッセージのスケルトン */}
					<div className='flex justify-start'>
						<div className='flex items-start gap-2'>
							<Skeleton className='w-9 h-9 rounded-full' />
							<div className='px-4 py-3 rounded-lg bg-gray-200 max-w-[75%]'>
								<Skeleton className='h-4 w-32 mb-2' />
								<Skeleton className='h-4 w-20' />
							</div>
						</div>
					</div>

					{/* 送信メッセージのスケルトン */}
					<div className='flex justify-end'>
						<div className='flex items-start gap-2 flex-row-reverse'>
							<Skeleton className='w-9 h-9 rounded-full' />
							<div className='px-4 py-3 rounded-lg bg-blue-200 max-w-[75%]'>
								<Skeleton className='h-4 w-36 mb-2' />
								<Skeleton className='h-4 w-24' />
							</div>
						</div>
					</div>
				</div>

				{/* 下：入力フォームのスケルトン */}
				<div className='flex items-center gap-2'>
					<Skeleton className='h-10 w-full rounded-md' />
					<Skeleton className='h-10 w-20 rounded-md' />
				</div>
			</div>
		</div>
	);
}

export default loading
