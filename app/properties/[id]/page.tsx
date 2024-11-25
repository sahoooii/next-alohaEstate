import { fetchPropertyDetails } from '@/actions/PropertyAction';
import { redirect } from 'next/navigation';

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
	const property = await fetchPropertyDetails(params.id);
	// console.log('pop:',property);

	if (!property) redirect('/');

	return <div>PropertyDetailsPage</div>;
};

export default PropertyDetailsPage;
