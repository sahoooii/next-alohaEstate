import { Suspense } from 'react';
import {
	StatsLoadingContainer,
	ChartLoadingContainer,
} from '@/components/admin/Loading';
import StatsContainer from '@/components/admin/StatsContainer';
import ChartsContainer from '@/components/admin/ChartsContainer';
import { getAdminUser } from '@/actions/AuthUserAction';

const AdminPage = async () => {
	await getAdminUser();
	
	return (
		<div className='container mt-8'>
			<Suspense fallback={<StatsLoadingContainer />}>
				<StatsContainer />
			</Suspense>
			<Suspense fallback={<ChartLoadingContainer />}>
				<ChartsContainer />
			</Suspense>
		</div>
	);
};

export default AdminPage;
