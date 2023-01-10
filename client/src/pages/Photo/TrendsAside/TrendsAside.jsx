import React, { useEffect, useState } from 'react';
import { TrendsContentWrapper, TrendsReset, TrendsTitle, TrendsWrapper } from '@src/pages/Photo/TrendsAside/style';
import { TrendsList } from '@src/pages/Photo/TrendsAside/TrendsList/TrendsList';
import { getCategoriesTop } from '@helpers/photo.helper';
import { addCategoryAction, resetFiltersAction, setPhotoAction, setPhotoSearch } from '@store/photo/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getPhotos, getSearchPhoto } from '@store/photo/selectors';
import { Search } from '@src/components/UI/Search/Search';
import { getModalState, getUser } from '@store/base/selectors';

export const TrendsAside = () => {
	const [trends, setTrends] = useState([]);
	const dispatch = useDispatch();
	const photoList = useSelector(getPhotos);
	const search = useSelector(getSearchPhoto);
	const categories = useSelector(getCategories);
	const modal = useSelector(getModalState);
	const user = useSelector(getUser);
	
	useEffect(() => {
		const trendsTop = getCategoriesTop(photoList);
		setTrends([...trendsTop]);
	}, [modal]);
	
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
				<TrendsList trends={trends} set={setCategory}/>
			</TrendsContentWrapper>
			{categories.length || search ? <TrendsReset onClick={() => resetFilters()}>Reset filters</TrendsReset> : null}
		</TrendsWrapper>
	);
};

TrendsAside.propTypes = {};
