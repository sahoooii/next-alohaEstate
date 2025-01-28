import Chart from './Chart';
import { fetchChartsData } from '@/actions/AdminAction';

const ChartsContainer = async () => {
	const bookings = await fetchChartsData();

	if (bookings.length < 1) return null;

	return <Chart data={bookings} />;
};

export default ChartsContainer;
