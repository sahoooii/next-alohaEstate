'use client';

import {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react';
import { useAuth } from '@clerk/nextjs';
// Create Context
const GlobalContext = createContext();

// Create Provider
export function GlobalProvider({ children }) {
	const [unreadCount, setUnreadCount] = useState(0);
	const [localUserId, setLocalUserId] = useState(null);
	const { userId } = useAuth();

	const refreshUnreadCount = useCallback(async () => {
		try {
			const res = await fetch('/api/unreadCount');
			const data = await res.json();
			setUnreadCount(data.count || 0);
			console.log('rendering!!!');
		} catch (error) {
			console.error('Failed to refresh unread count:', error);
		}
	}, []);

	useEffect(() => {
		if (!localUserId && userId) {
			setLocalUserId(userId);
			refreshUnreadCount();
		}
	}, [userId, localUserId, refreshUnreadCount]);

	return (
		<GlobalContext.Provider
			value={{
				unreadCount,
				setUnreadCount,
				refreshUnreadCount,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}

export function useGlobalContext() {
	return useContext(GlobalContext);
}
