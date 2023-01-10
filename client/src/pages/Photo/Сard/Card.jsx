import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	CardAuthorName,
	CardAuthorPhoto, CardBottomContent, CardCategories, CardCategoryItem, CardControls, CardDescription, CardFavoriteButton,
	CardImage, CardImageWrapper, CardLikeButton, CardLikeCounter, CardLikeWrapper, CardTime, CardTitle,
	CardTitleWrapper,
	CardWrapper,
} from '@src/pages/Photo/Сard/style';
import { BASE_URL } from '@constants/base';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryAction, getUserLikes, likePhoto, makePhotoFavorite } from '@store/photo/actions';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';
import { getPhotos } from '@store/photo/selectors';
import { getUser } from '@store/base/selectors';
import { setModalState } from '@store/base/actions';
import { Loader } from '@src/components/Loader/Loader';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

export const Card = ({ item }) => {
	const dispatch = useDispatch();
	const axiosPrivate = useAxiosPrivate();
	const photos = useSelector(getPhotos);
	const user = useSelector(getUser);
	const [isLoad, setLoad] = useState(false);
	const [isLikeLoading, setLikeLoading] = useState(false);
	const [isFavoriteLoading, setFavoriteLoading] = useState(false);
	
	const likeHandler = (e, id) => {
		if (isLikeLoading) {
			return;
		}
		
		e.target.classList.add('active');
		if (user) {
			dispatch(likePhoto(id, photos, axiosPrivate, setLikeLoading));
		} else {
			dispatch(setModalState('auth'));
		}
		setTimeout(() => {
			e.target.classList.remove('active');
		}, 400);
	};
	
	const favoriteHandler = (e, id) => {
		if (isFavoriteLoading) {
			return;
		}
		
		e.target.classList.add('active');
		if (user) {
			dispatch(makePhotoFavorite(id, photos, axiosPrivate, setFavoriteLoading));
		} else {
			dispatch(setModalState('auth'));
		}
		setTimeout(() => {
			e.target.classList.remove('active');
		}, 400);
	};
	
	const userLikesFetch = (id) => {
		dispatch(getUserLikes(id));
	};
	
	const setCategory = (value) => {
		dispatch(addCategoryAction([], value));
	};
	
	return (
		<CardWrapper isLoad={isLoad}>
			<CardTitleWrapper>
				<CardAuthorPhoto>{item.author.slice(0, 1)}</CardAuthorPhoto>
				<CardAuthorName>{item.author}</CardAuthorName>
				<CardTime>{moment(item.time).format('DD/MM/YYYY HH:mm')}</CardTime>
			</CardTitleWrapper>
			<CardImageWrapper>
				{isLoad ? null : <Loader size={50}/>}
				<CardImage onLoad={() => setLoad(true)} isLoad={isLoad} src={`${BASE_URL}/photo/download/${item.source}`} alt={item.title}/>
			</CardImageWrapper>
			<CardBottomContent>
				<CardControls>
					<CardLikeWrapper>
						<CardLikeButton className={item.byUser[0] ? 'icon-like' : 'icon-no-like'} onClick={(e) => likeHandler(e, item._id)}/>
						{item.likes > 0 ? <CardLikeCounter onClick={() => userLikesFetch(item._id)}>{item.likes}</CardLikeCounter> : null}
					</CardLikeWrapper>
					<CardFavoriteButton className={item.favorite[0] ? 'icon-saved' : 'icon-no-saved'} onClick={(e) => favoriteHandler(e, item._id)}/>
				</CardControls>
				<CardTitle>{item.title}</CardTitle>
				<CardCategories>
					{item.categories.map((category) => {
						return <CardCategoryItem key={uuid()} onClick={() => setCategory(category)}>{`#${category}`}</CardCategoryItem>;
					})}
				</CardCategories>
				{item.description ? <CardDescription>{`${item.author}: ${item.description}`}</CardDescription> : null}
			</CardBottomContent>
		</CardWrapper>
	);
};

Card.propTypes = {
	item: PropTypes.shape({
		_id: PropTypes.string,
		author: PropTypes.string,
		source: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		categories: PropTypes.array,
		likes: PropTypes.number,
		byUser: PropTypes.array,
		favorite: PropTypes.array,
		time: PropTypes.string,
	}),
};
