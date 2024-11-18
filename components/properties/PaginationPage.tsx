import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

const PaginationPage = ({
	page,
	totalPages,
	linkName,
}: {
	page: number;
	totalPages: number;
	linkName: string;
}) => {
	return (
		<div className='mt-10'>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						{page > 1 ? (
							<PaginationPrevious href={`/${linkName}?page=${page - 1}`} />
						) : null}
					</PaginationItem>

					{page > 1 && (
						<PaginationItem>
							{[...Array(totalPages).keys()].map((x) => (
								<PaginationLink
									key={x + 1}
									href={`/${linkName}?page=${x + 1}`}
									isActive={x + 1 === page}
								>
									{x + 1}
								</PaginationLink>
							))}
						</PaginationItem>
					)}

					<PaginationItem>
						{page < totalPages ? (
							<PaginationNext href={`/${linkName}?page=${page + 1}`} />
						) : null}
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};

export default PaginationPage;
