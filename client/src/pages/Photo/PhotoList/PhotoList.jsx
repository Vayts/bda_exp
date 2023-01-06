import React, { useEffect, useRef, useState } from 'react';
import { PhotoListContent, PhotoListFiller, PhotoListWrapper } from '@src/pages/Photo/PhotoList/style';
import { useSelector } from 'react-redux';
import { getPhotos } from '@store/photo/selectors';
import { Card } from '@src/pages/Photo/Сard/Card';
import { Pagination } from '@src/components/UI/Pagination/Pagination';
import PropTypes from 'prop-types';

export const PhotoList = ({ photoPerPage }) => {
	const photoList = useSelector(getPhotos);
	const topRef = useRef(null);
	const [currentPhotos, setCurrentPhotos] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	
	useEffect(() => {
		const lastPhotoIndex = currentPage * photoPerPage;
		const firstPhotoIndex = lastPhotoIndex - photoPerPage;
		setCurrentPhotos(photoList.slice(firstPhotoIndex, lastPhotoIndex));
		window.scrollTo(0, 0);
	}, [currentPage, photoList]);
	
	return (
		<PhotoListWrapper ref={topRef}>
			{photoList.length === 0 ? <PhotoListFiller>Nothing! =(</PhotoListFiller> : (
				<PhotoListContent>
					{currentPhotos.map((item, index) => {
						return (<Card order={index > 10 ? 10 : index} key={item._id} item={item}/>);
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
