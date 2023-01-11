import React from 'react';
import {
	ProfileAsideContent,
	ProfileAsideWrapper,
	ProfileAvatarFiller, ProfileBottomContent, ProfileBottomItem, ProfileIcon, ProfileText,
	ProfileUpContent,
	ProfileUserLogin,
} from '@src/pages/Photo/ProfileAside/style';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@store/base/selectors';
import { Button } from '@src/components/UI/Button/Button';
import { setModalState } from '@store/base/actions';
import {
	getFavoritesPhotos,
	getLikedPhotos,
	getUserPhotos,
	setPage,
	setPhotoAction,
	setPhotoSearch,
} from '@store/photo/actions';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';
import { getPage } from '@store/photo/selectors';

export const ProfileAside = () => {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const axiosPrivate = useAxiosPrivate();
	const page = useSelector(getPage);
	
	const addPhotoOpen = () => {
		dispatch(setModalState('addPhoto'));
	};
	
	const getUserLiked = () => {
		if (page !== 'liked') {
			window.scrollTo(0, 0);
			dispatch(getLikedPhotos(axiosPrivate));
		}
	};
	
	const getUserFavorites = () => {
		if (page !== 'favorites') {
			window.scrollTo(0, 0);
			dispatch(getFavoritesPhotos(axiosPrivate));
		}
	};
	
	const getPhotosByUser = () => {
		if (page !== 'photoByUser') {
			window.scrollTo(0, 0);
			dispatch(getUserPhotos(axiosPrivate));
		}
	};
	
	const goToHome = () => {
		window.scrollTo(0, 0);
		dispatch(setPhotoSearch(''));
		dispatch(setPhotoAction([], () => {}, '', user));
		dispatch(setPage('home'));
	};
	
	return (
		<ProfileAsideWrapper>
			<ProfileAsideContent>
				<ProfileUpContent>
					<ProfileAvatarFiller>{user.login.slice(0, 1)}</ProfileAvatarFiller>
					<ProfileUserLogin length={user.login.length}>{user.login}</ProfileUserLogin>
				</ProfileUpContent>
				<ProfileBottomContent>
					<ProfileBottomItem isActive={page === 'home'} onClick={() => goToHome()}>
						<ProfileIcon className='icon-home'/>
						<ProfileText>Home</ProfileText>
					</ProfileBottomItem>
					<ProfileBottomItem isActive={page === 'liked'} onClick={() => getUserLiked()}>
						<ProfileIcon className='icon-like'/>
						<ProfileText>Liked photos</ProfileText>
					</ProfileBottomItem>
					<ProfileBottomItem isActive={page === 'favorites'} onClick={() => getUserFavorites()}>
						<ProfileIcon className='icon-saved'/>
						<ProfileText> My favorites</ProfileText>
					</ProfileBottomItem>
					<ProfileBottomItem isActive={page === 'photoByUser'} onClick={() => getPhotosByUser()}>
						<ProfileIcon className='icon-gallery'/>
						<ProfileText>My photos</ProfileText>
					</ProfileBottomItem>
				</ProfileBottomContent>
			</ProfileAsideContent>
			<Button text='Add photo' width='100%' height='50px' fz='14px' clickHandler={() => addPhotoOpen()}/>
		</ProfileAsideWrapper>
	);
};

ProfileAside.propTypes = {};
