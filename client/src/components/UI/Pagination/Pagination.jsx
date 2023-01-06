import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { PaginationDots, PaginationItem, PaginationWrapper } from '@src/components/UI/Pagination/style';
import { generatePaginationArr } from '@helpers/pagination.helper';

export const Pagination = ({ perPage, length, setPage, currentPage, updateParam }) => {
	const [pages, setPages] = useState([]);
	
	useEffect(() => {
		const paginationState = generatePaginationArr(currentPage, length, perPage);
		setPages([...paginationState]);
	}, [currentPage, updateParam]);
	
	return (
		<PaginationWrapper>
			{pages.map((item) => {
				if (item === null) {
					return (<PaginationDots key={uuidv4()}/>);
				}
				return (
					<PaginationItem
						isActive={currentPage === item}
						onClick={() => setPage(item)}
						key={uuidv4()}
					>
						{item}
					</PaginationItem>
				);
			})}
		</PaginationWrapper>
	);
};

Pagination.propTypes = {
	perPage: PropTypes.number,
	length: PropTypes.number,
	setPage: PropTypes.func,
	currentPage: PropTypes.number,
	updateParam: PropTypes.any,
};
