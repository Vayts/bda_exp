import React from 'react';
import PropTypes from 'prop-types';
import { TrendCounter, TrendItemWrapper, TrendTitle } from '@src/pages/Photo/TrendsAside/TrendsList/TrendsItem/style';

export const TrendItem = ({ trend, set, isActive }) => {
	return (
		<TrendItemWrapper>
			<TrendTitle isActive={isActive} data-value={trend._id} onClick={() => set(trend._id)}>{`#${trend._id}`}</TrendTitle>
			<TrendCounter>{`${trend.count} Photo(s)`}</TrendCounter>
		</TrendItemWrapper>
	);
};

TrendItem.propTypes = {
	trend: PropTypes.shape({
		_id: PropTypes.string,
		count: PropTypes.number,
	}),
	isActive: PropTypes.bool,
	set: PropTypes.func,
};
