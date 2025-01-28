'use client';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

type ChartPropsType = {
	data: {
		date: string;
		count: number;
	}[];
};

const Chart = ({ data }: ChartPropsType) => {
	return (
		<section className='md:mt-24 mt-20 mb-24'>
			<h1 className='md:text-4xl text-3xl font-semibold fot-mono text-center'>Monthly Bookings</h1>
			<ResponsiveContainer width='100%' height={300}>
				<BarChart data={data} margin={{ top: 50 }}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='date' />
					<YAxis allowDecimals={false} />
					<Tooltip />
					<Bar dataKey='count' fill='#2563EB' barSize={75} />
				</BarChart>
			</ResponsiveContainer>
		</section>
	);
};

export default Chart;
