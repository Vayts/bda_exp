import React, { useEffect, useState } from 'react';
import { PhotoContent, PhotoContentSplitter, PhotoMain } from '@src/pages/Photo/style';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotoAction } from '@store/photo/actions';
import { PhotoList } from '@src/pages/Photo/PhotoList/PhotoList';
import { getCategories, getSearch } from '@store/photo/selectors';
import { Loader } from '@src/components/Loader/Loader';
import { TrendsAside } from '@src/pages/Photo/TrendsAside/TrendsAside';
import { removeModal } from '@store/base/actions';
import { getUser } from '@store/base/selectors';
import { ProfileAside } from '@src/pages/Photo/ProfileAside/ProfileAside';

export const Photo = () => {
	const dispatch = useDispatch();
	const categories = useSelector(getCategories);
	const search = useSelector(getSearch);
	const user = useSelector(getUser);
	const [isLoading, setLoading] = useState(false);
	
	useEffect(() => {
		dispatch(setPhotoAction(categories, setLoading, search, user));
		
		return () => {
			dispatch(removeModal());
		};
	}, [categories, search, user]);
	
	return (
		<PhotoContent>
			<PhotoContentSplitter>
				{user ? <ProfileAside/> : null}
			</PhotoContentSplitter>
			<PhotoContentSplitter>
				<PhotoMain>
					{isLoading ? <Loader size={80}/> : <PhotoList photoPerPage={4}/>}
				</PhotoMain>
			</PhotoContentSplitter>
			<PhotoContentSplitter>
				<TrendsAside disabled={isLoading}/>
			</PhotoContentSplitter>
		</PhotoContent>
	);
};

Photo.propTypes = {};
