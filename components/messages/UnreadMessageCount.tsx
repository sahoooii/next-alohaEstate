'use client';

import { useGlobalContext } from '@/context/GlobalContext';

const UnreadMessageCount = () => {
	const { unreadCount } = useGlobalContext();
	return (
		<div>
			{unreadCount === 0 ? (
				<></>
			) : (
				<span className='absolute -right-4 -top-3 bg-blue-400 text-white rounded-full py-[5px] px-[10px] text-xs font-bold'>
					{unreadCount}
				</span>
			)}
		</div>
	);
};

export default UnreadMessageCount;
