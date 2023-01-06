import React from 'react';
import PropTypes from 'prop-types';
import { TrendCounter, TrendItemWrapper, TrendTitle } from '@src/pages/Photo/TrendsAside/TrendsList/TrendsItem/style';

export const TrendItem = ({ trend, set }) => {
	return (
		<TrendItemWrapper>
			<TrendTitle data-value={trend.value} onClick={() => set(trend.value)}>{`#${trend.value}`}</TrendTitle>
			<TrendCounter>{`${trend.counter} Photo(s)`}</TrendCounter>
		</TrendItemWrapper>
	);
};

TrendItem.propTypes = {
	trend: PropTypes.shape({
		value: PropTypes.string,
		counter: PropTypes.number,
	}),
	set: PropTypes.func,
};
