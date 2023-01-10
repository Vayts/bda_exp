import React, { useEffect, useRef, useState } from 'react';
import { PhotoListContent, PhotoListFiller, PhotoListWrapper } from '@src/pages/Photo/PhotoList/style';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getPhotos } from '@store/photo/selectors';
import { Card } from '@src/pages/Photo/Сard/Card';
import { Pagination } from '@src/components/UI/Pagination/Pagination';
import PropTypes from 'prop-types';
import { setCurrentPageAction } from '@store/photo/actions';

export const PhotoList = ({ photoPerPage }) => {
	const photoList = useSelector(getPhotos);
	const topRef = useRef(null);
	const currentPage = useSelector(getCurrentPage);
	const dispatch = useDispatch();
	const [currentPhotos, setCurrentPhotos] = useState([]);
	
	useEffect(() => {
		const lastPhotoIndex = currentPage * photoPerPage;
		const firstPhotoIndex = lastPhotoIndex - photoPerPage;
		setCurrentPhotos(photoList.slice(firstPhotoIndex, lastPhotoIndex));
	}, [currentPage, photoList]);
	
	const setCurrentPage = (value) => {
		dispatch(setCurrentPageAction(value));
	}
	
	return (
		<PhotoListWrapper ref={topRef}>
			{photoList.length === 0 ? <PhotoListFiller>Nothing! =(</PhotoListFiller> : (
				<PhotoListContent>
					{currentPhotos.map((item) => {
						return (<Card key={item._id} item={item}/>);
					})}
				</PhotoListContent>
			)}
			{photoList.length <= photoPerPage ? null
				: (
					<Pagination
						length={photoList.length}
						perPage={photoPerPage}
						setPage={setCurrentPage}
						currentPage={currentPage}
						updateParam={photoList}
					/>
				)}
		</PhotoListWrapper>
	);
};

PhotoList.propTypes = {
	photoPerPage: PropTypes.number,
};
