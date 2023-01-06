import React, { useEffect, useState } from 'react';
import { PhotoContent, PhotoMain } from '@src/pages/Photo/style';
import { CategoriesAside } from '@src/pages/Photo/CategoriesAside/CategoriesAside';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotoAction } from '@store/photo/actions';
import { PhotoList } from '@src/pages/Photo/PhotoList/PhotoList';
import { getCategories, getSearch } from '@store/photo/selectors';
import { Loader } from '@src/components/Loader/Loader';
import { TrendsAside } from '@src/pages/Photo/TrendsAside/TrendsAside';
import { removeModal } from '@store/base/actions';

export const Photo = () => {
	const dispatch = useDispatch();
	const categories = useSelector(getCategories);
	const search = useSelector(getSearch);
	const [isLoading, setLoading] = useState(false);
	
	useEffect(() => {
		dispatch(setPhotoAction(categories, setLoading, search));
		
		return () => {
			dispatch(removeModal());
		};
	}, [categories, search]);
	
	return (
		<>
			<PhotoContent>
				<TrendsAside disabled={isLoading}/>
				<PhotoMain>
					{isLoading ? <Loader size={80}/> : <PhotoList photoPerPage={4}/>}
				</PhotoMain>
				<CategoriesAside disabled={isLoading}/>
			</PhotoContent>
		</>
	);
};

Photo.propTypes = {};
