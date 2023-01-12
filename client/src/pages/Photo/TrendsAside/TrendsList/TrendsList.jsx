import React from 'react';
import { TrendsListWrapper } from '@src/pages/Photo/TrendsAside/TrendsList/style';
import { TrendItem } from '@src/pages/Photo/TrendsAside/TrendsList/TrendsItem/TrendItem';
import { useSelector } from 'react-redux';
import { getCategories, getTrends } from '@store/photo/selectors';
import PropTypes from 'prop-types';

export const TrendsList = ({ set }) => {
	const trends = useSelector(getTrends);
	const categories = useSelector(getCategories);
	
	return (
		<>
			{trends.length > 0 ? (
				<TrendsListWrapper>
					{trends.map((item) => {
						return (<TrendItem key={item._id} trend={item} set={set} isActive={categories.includes(item._id)}/>);
					})}
				</TrendsListWrapper>
			) 
				: <p>No trends for you</p>}
		</>
	);
};

TrendsList.propTypes = {
	set: PropTypes.func,
};
