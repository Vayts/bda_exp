import React, { useEffect, useState } from 'react';
import { TrendsContentWrapper, TrendsTitle, TrendsWrapper } from '@src/pages/Photo/TrendsAside/style';
import { TrendsList } from '@src/pages/Photo/TrendsAside/TrendsList/TrendsList';
import { getCategoriesTop } from '@helpers/photo.helper';
import { addCategoryAction, setSearch } from '@store/photo/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos, getSearch } from '@store/photo/selectors';
import { Search } from '@src/components/UI/Search/Search';
import { getModalState } from '@store/base/selectors';

export const TrendsAside = () => {
	const [trends, setTrends] = useState([]);
	const dispatch = useDispatch();
	const photoList = useSelector(getPhotos);
	const search = useSelector(getSearch);
	const modal = useSelector(getModalState);
	
	useEffect(() => {
		const trendsTop = getCategoriesTop(photoList);
		setTrends([...trendsTop]);
	}, [modal]);
	
	const setCategory = (value) => {
		dispatch(addCategoryAction([], value));
	};
	
	return (
		<TrendsWrapper>
			<Search action={setSearch} value={search} placeholder='Search'/>
			<TrendsContentWrapper>
				<TrendsTitle>Trends for you</TrendsTitle>
				<TrendsList trends={trends} set={setCategory}/>
			</TrendsContentWrapper>
		</TrendsWrapper>
	);
};

TrendsAside.propTypes = {};
