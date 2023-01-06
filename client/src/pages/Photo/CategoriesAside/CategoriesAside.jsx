import React from 'react';
import PropTypes from 'prop-types';
import {
	CategoriesContentWrapper,
	CategoriesItem,
	CategoriesList, CategoriesResult,
	CategoriesTitle,
	CategoriesWrapper,
} from '@src/pages/Photo/CategoriesAside/style';
import { CATEGORIES } from '@constants/category';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryAction } from '@store/photo/actions';
import { getCategories, getPhotos } from '@store/photo/selectors';
import { Button } from '@src/components/UI/Button/Button';
import { setModalState } from '@store/base/actions';
import { getUser } from '@store/base/selectors';

export const CategoriesAside = ({ disabled }) => {
	const dispatch = useDispatch();
	const categories = useSelector(getCategories);
	const photoList = useSelector(getPhotos);
	const user = useSelector(getUser);
	
	const addPhotoOpen = () => {
		dispatch(setModalState('addPhoto'));
	};
	
	const setCategory = (e) => {
		if (!disabled) {
			dispatch(addCategoryAction(categories, e.target.dataset.value));
		}
	};
	
	return (
		<CategoriesWrapper>
			<CategoriesContentWrapper>
				<CategoriesTitle>All categories</CategoriesTitle>
				<CategoriesList>
					{CATEGORIES.map((item) => {
						return (
							<CategoriesItem key={item} isActive={categories.includes(item)} onClick={(e) => setCategory(e)} data-value={item}>{`#${item}`}</CategoriesItem>
						);
					})}
				</CategoriesList>
				<CategoriesResult>{`Results found: ${photoList.length}`}</CategoriesResult>
			</CategoriesContentWrapper>
			{user ? <Button text='Add photo' width='100%' height='50px' fz='14px' clickHandler={() => addPhotoOpen()}/> : null}
		</CategoriesWrapper>
	);
};

CategoriesAside.propTypes = {
	disabled: PropTypes.bool,
};
