import React from 'react';
import PropTypes from 'prop-types';
import { SearchIcon, SearchInput, SearchWrapper } from '@src/components/UI/Search/style';
import { useDispatch } from 'react-redux';

export const Search = ({ action, value, placeholder, margin, width, height, fz }) => {
	const dispatch = useDispatch();
	
	const changeHandler = (e) => {
		dispatch(action(e.target.value));
	};
	
	return (
		<SearchWrapper margin={margin} width={width} height={height}>
			<SearchInput placeholder={placeholder} value={value} onChange={(e) => changeHandler(e)} fz={fz}/>
			<SearchIcon className='icon-search'/>
		</SearchWrapper>
	);
};

Search.propTypes = {
	action: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	margin: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	fz: PropTypes.string,
};
