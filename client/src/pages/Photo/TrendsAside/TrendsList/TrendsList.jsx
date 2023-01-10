import React, { useEffect } from 'react';
import { TrendsListWrapper } from '@src/pages/Photo/TrendsAside/TrendsList/style';
import { TrendItem } from '@src/pages/Photo/TrendsAside/TrendsList/TrendsItem/TrendItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getPhotos, getTrends } from '@store/photo/selectors';
import { setTrends } from '@store/photo/actions';
import { getCategoriesTop } from '@helpers/photo.helper';
import PropTypes from 'prop-types';

export const TrendsList = ({ set }) => {
	const dispatch = useDispatch();
	const trends = useSelector(getTrends);
	const photoList = useSelector(getPhotos);
	const categories = useSelector(getCategories);
	
	useEffect(() => {
		if (!trends.length && photoList.length) {
			const trends = getCategoriesTop(photoList);
			dispatch(setTrends(trends));
		}
	}, [photoList]);
	
	return (
		<>
			{trends.length > 0 ? (
				<TrendsListWrapper>
					{trends.slice(0, 5).map((item, index) => {
						return (<TrendItem key={`${item.counter * index}-${item.value}`} trend={item} set={set} isActive={categories.includes(item.value)}/>);
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
