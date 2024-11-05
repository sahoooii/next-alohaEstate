'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input';

const NavSearch = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const [search, setSearch] = useState(
		searchParams.get('search')?.toString() || ''
	);

	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set('search', value);
		} else {
			params.delete('search');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 500);

	useEffect(() => {
		if (!searchParams.get('search')) {
			setSearch('');
		}
	}, [searchParams]);

	return (
		<Input
			type='text'
			placeholder='Find Your Next Vacation...'
			className='max-w-xs dark:bg-muted border border-blue-300'
			onChange={(e) => {
				setSearch(e.target.value);
				handleSearch(e.target.value);
			}}
			value={search}
		/>
	);
};

export default NavSearch;
