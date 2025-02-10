'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getUnreadMessageCount } from '@/actions/MessageAction';
import { useAuth } from '@clerk/nextjs';
// Create Context
const GlobalContext = createContext();

// Create Provider
export function GlobalProvider({ children }) {
	const [unreadCount, setUnreadCount] = useState(0);
	const { userId } = useAuth();

	useEffect(() => {
		if(userId !== null) {
			getUnreadMessageCount().then((count) => {
				if (count) setUnreadCount(count);
			});
		}
	}, [getUnreadMessageCount]);

	return (
		<GlobalContext.Provider
			value={{
				unreadCount,
				setUnreadCount,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}

export function useGlobalContext() {
	return useContext(GlobalContext);
}
