import {
	ADD_CATEGORY, RESET_FILTERS, SET_CURRENT_PAGE, SET_PAGE, SET_PHOTO_SEARCH,
	SET_PHOTOS,
	SET_TRENDS, SET_USER_LIKES,
} from '@store/photo/actionTypes';
import { getNotification } from '@src/notifications/notification';
import { setModalState } from '@store/base/actions';
import axios from '@src/api/axios';

export function addCategoryAction(categoriesList, value) {
	return (dispatch) => {
		if (categoriesList.includes(value)) {
			const newState = categoriesList.filter((item) => item !== value);
			dispatch(addCategory(newState));
		} else {
			const newState = [...categoriesList, value];
			dispatch(addCategory(newState));
		}
	};
}

export function setPhotoAction(categories, setLoading, search, user) {
	return async (dispatch) => {
		setLoading(true);
		const searchArr = search.trim().split(' ');
		const searchQuery = categories.concat(searchArr);
		
		const config = {
			withCredentials: true,
		};
		
		if (user) {
			config.headers = {
				Authorization: `Bearer ${user.token}`,
			};
		}
		
		try {
			const response = await axios.get(`/photo/list?categories=${searchQuery}`, config);
			dispatch(setPhoto(response.data.value));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		} finally {
			setLoading(false);
		}
	};
}

export function sendPhotoAction(values, categories, search, axiosPrivate, setLoading) {
	return async (dispatch) => {
		setLoading(true);
		const formData = new FormData();
		const keys = Object.keys(values);
		keys.forEach((el) => {
			if (typeof values[el] === 'string') {
				formData.set(el, values[el]);
			} else {
				formData.append('file', values.file[0]);
			}
		});
		try {
			const response = await axiosPrivate.post('/photo/upload', formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				},
			);
			dispatch(setModalState(null));
			dispatch(setPage('home'));
			getNotification('Photo has been uploaded', 'success');
			dispatch(setPhoto(response.data.value));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		} finally {
			setLoading(true);
		}
	};
}

export function setPhoto(value) {
	return {
		type: SET_PHOTOS,
		payload: value,
	};
}

export function addCategory(value) {
	return {
		type: ADD_CATEGORY,
		payload: value,
	};
}

export function setPhotoSearch(value) {
	return {
		type: SET_PHOTO_SEARCH,
		payload: value,
	};
}
export function setTrends(value) {
	return {
		type: SET_TRENDS,
		payload: value,
	};
}

export function setPage(page) {
	return {
		type: SET_PAGE,
		payload: page,
	};
}

export function likePhoto(id, photos, axiosPrivate, setLoading) {
	return async (dispatch) => {
		try {
			setLoading(true);
			const response = await axiosPrivate.get(`/photo/like/${id}`);
			const newState = photos.map((item) => {
				if (item._id === id) {
					return {
						...response.data.value,
					};
				}
				return item;
			});
			dispatch(setPhoto(newState));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		} finally {
			setLoading(false);
		}
	};
}

export function makePhotoFavorite(id, photos, axiosPrivate, setLoading) {
	return async (dispatch) => {
		try {
			setLoading(true);
			const response = await axiosPrivate.get(`/photo/favorite/${id}`);
			const newState = photos.map((item) => {
				if (item._id === id) {
					return {
						...response.data.value,
					};
				}
				return item;
			});
			dispatch(setPhoto(newState));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		} finally {
			setLoading(false);
		}
	};
}

export function getLikedPhotos(axiosPrivate) {
	return async (dispatch) => {
		try {
			const response = await axiosPrivate.get('/photo/liked_photos');
			dispatch(setPhoto(response.data.value));
			dispatch(setPage('liked'));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		}
	};
}

export function getFavoritesPhotos(axiosPrivate) {
	return async (dispatch) => {
		try {
			const response = await axiosPrivate.get('/photo/favorite_photos');
			dispatch(setPhoto(response.data.value));
			dispatch(setPage('favorites'));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		}
	};
}

export function getUserPhotos(axiosPrivate) {
	return async (dispatch) => {
		try {
			const response = await axiosPrivate.get('/photo/user_photos');
			dispatch(setPhoto(response.data.value));
			dispatch(setPage('photoByUser'));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		}
	};
}

export function resetFiltersAction() {
	return {
		type: RESET_FILTERS,
	};
}

export function setCurrentPageAction(pageNumber) {
	return {
		type: SET_CURRENT_PAGE,
		payload: pageNumber,
	};
}

export function getUserLikes(id) {
	return async (dispatch) => {
		try {
			const response = await axios.get(`/photo/user_photo_likes/${id}`);
			dispatch(setUserLikes(response.data.value));
			dispatch(setModalState('userLikes'));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		}
	};
}

export function setUserLikes(value) {
	return {
		type: SET_USER_LIKES,
		payload: value,
	};
}

export function deleteUserPhoto(axiosPrivate, id, photos) {
	return async (dispatch) => {
		try {
			await axiosPrivate.delete(`/photo/delete_photo/${id}`);
			const newState = photos.filter((item) => {
				if (item._id !== id) {
					return item;
				}
				return null;
			});
			dispatch(setPhoto(newState));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		}
	};
}

export function postUserComment(axiosPrivate, data, id, photos) {
	return async (dispatch) => {
		try {
			const response = await axiosPrivate.post(`/photo/comment/${data.photo_id}`, data);
			const newState = photos.map((item) => {
				if (item._id === id) {
					return {
						...response.data.value,
					};
				}
				return item;
			});
			dispatch(setPhoto(newState));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		}
	};
}

export function deleteComment(axiosPrivate, id, photoId, photos) {
	return async (dispatch) => {
		try {
			const response = await axiosPrivate.delete(`/photo/delete_comment/${photoId}/${id}`);
			const newState = photos.map((item) => {
				if (item._id === photoId) {
					return {
						...response.data.value,
					};
				}
				return item;
			});
			dispatch(setPhoto(newState));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		}
	};
}
