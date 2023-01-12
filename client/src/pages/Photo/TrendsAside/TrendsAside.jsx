import React, { useEffect } from 'react';
import { TrendsContentWrapper, TrendsReset, TrendsTitle, TrendsWrapper } from '@src/pages/Photo/TrendsAside/style';
import { TrendsList } from '@src/pages/Photo/TrendsAside/TrendsList/TrendsList';
import {
	addCategoryAction,
	getTrendsListAction,
	resetFiltersAction,
	setPhotoAction,
	setPhotoSearch,
} from '@store/photo/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getSearchPhoto } from '@store/photo/selectors';
import { Search } from '@src/components/UI/Search/Search';
import { getUser } from '@store/base/selectors';

export const TrendsAside = () => {
	const dispatch = useDispatch();
	const search = useSelector(getSearchPhoto);
	const categories = useSelector(getCategories);
	const user = useSelector(getUser);
	
	useEffect(() => {
		dispatch(getTrendsListAction());
	}, []);
	
	const setCategory = (value) => {
		dispatch(addCategoryAction(categories, value));
	};
	
	const resetFilters = () => {
		dispatch(setPhotoAction([], () => {}, '', user));
		dispatch(resetFiltersAction());
	};
	
	return (
		<TrendsWrapper>
			<Search action={setPhotoSearch} value={search} placeholder='Search'/>
			<TrendsContentWrapper>
				<TrendsTitle>Trends for you</TrendsTitle>
				<TrendsList set={setCategory}/>
			</TrendsContentWrapper>
			{categories.length || search ? <TrendsReset onClick={() => resetFilters()}>Reset filters</TrendsReset> : null}
		</TrendsWrapper>
	);
};

TrendsAside.propTypes = {};
