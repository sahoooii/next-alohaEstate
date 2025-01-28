import Link from 'next/link';
import { categories } from '@/utils/categories';

const CategoriesList = ({
	category,
	search,
}: {
	category?: string;
	search?: string;
}) => {
	const searchTerm = search ? `&search=${search}` : '';

	return (
		<section className='py-4 sm:py-6'>
			<div className='flex flex-wrap gap-x-2 sm:gap-x-12 justify-center'>
				{categories.map((item) => {
					const isActive = item.label === category;
					return (
						<Link
							key={item.label}
							href={`/properties?category=${item.label}${searchTerm}`}
						>
							<article
								className={`p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary w-[100px] ${
									isActive ? 'text-primary' : ''
								}`}
							>
								<item.icon className='w-6 h-6 sm:w-8 sm:h-8' />
								<p className='capitalize text-xs sm:text-sm mt-1 text-center'>
									{item.label}
								</p>
							</article>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default CategoriesList;
