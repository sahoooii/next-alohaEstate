'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { CiCircleMinus } from 'react-icons/ci';import { CiCirclePlus } from 'react-icons/ci';

const Comment = ({ comment }: { comment: string }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	const longComment = comment.length > 150;

	const displayComment =
		longComment && !isExpanded ? `${comment.slice(0, 150)}...` : comment;

	return (
		<div>
			<p className='text-sm'>{displayComment}</p>
			{longComment && (
				<Button
					variant='link'
					className='pl-0 text-gray-600'
					onClick={toggleExpand}
				>
					{isExpanded ? (
						<>
							<CiCircleMinus className='mr-1' /> Show Less
						</>
					) : (
						<>
							<CiCirclePlus className='mr-1' /> Show More
						</>
					)}
				</Button>
			)}
		</div>
	);
};

export default Comment;
