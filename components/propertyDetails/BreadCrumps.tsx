import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const BreadCrumps = ({
	name,
	link,
	title,
}: {
	name: string;
	link: string;
	title: string;
}) => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href={link} className='font-mono'>
						{title}
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbPage className='font-mono'>{name}</BreadcrumbPage>
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default BreadCrumps;
