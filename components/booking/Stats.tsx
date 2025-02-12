import { formatCurrency } from '@/utils/format';
import StatsCards from '@/components/admin/StatsCard';
import { fetchBookingsStats } from '@/actions/BookingAction';

const Stats = async () => {
	const stats = await fetchBookingsStats();
	
	return (
		<div className='mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
			<StatsCards title='properties' value={stats.properties} />
			<StatsCards title='nights' value={stats.nights} />
			<StatsCards title='amount' value={formatCurrency(stats.amount)} />
		</div>
	);
};

export default Stats;
