import React from 'react';
import PropTypes from 'prop-types';
import { TrendCounter, TrendItemWrapper, TrendTitle } from '@src/pages/Photo/TrendsAside/TrendsList/TrendsItem/style';

export const TrendItem = ({ trend, set, isActive }) => {
	return (
		<TrendItemWrapper>
			<TrendTitle isActive={isActive} data-value={trend.value} onClick={() => set(trend.value)}>{`#${trend.value}`}</TrendTitle>
			<TrendCounter>{`${trend.counter} Photo(s)`}</TrendCounter>
		</TrendItemWrapper>
	);
};

TrendItem.propTypes = {
	trend: PropTypes.shape({
		value: PropTypes.string,
		counter: PropTypes.number,
	}),
	isActive: PropTypes.bool,
	set: PropTypes.func,
};
