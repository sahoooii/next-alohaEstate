import CategoriesList from '@/components/home/CategoriesList';
import Hero from '../components/home/Hero';
import PropertiesContainer from '@/components/home/PropertiesContainer';

const HomePage = ({
	searchParams,
}: {
	searchParams: { category?: string; search?: string };
}) => {
	console.log(searchParams);

	return (
		<section>
			<Hero />
			<div className='container py-8 mb-20'>
				<CategoriesList
					category={searchParams.category}
					search={searchParams.search}
				/>
				<PropertiesContainer
					category={searchParams.category}
					search={searchParams.search}
				/>

				{/* Add later, after create data */}
				{/* Featured Properties */}
				{/* Recent Properties */}
			</div>
		</section>
	);
};

export default HomePage;
