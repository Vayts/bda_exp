import {
	ADD_CATEGORY, SET_PAGE,
	SET_PHOTOS,
	SET_SEARCH,
	SET_TRENDS,
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
			// eslint-disable-next-line no-console
			console.log(e);
			getNotification('Something went wrong!', 'error');
		} finally {
			setLoading(false);
		}
	};
}

export function sendPhotoAction(values, categories, search, axiosPrivate) {
	return async (dispatch) => {
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
			await axiosPrivate.post('/photo/upload', formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				},
			);
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		} finally {
			dispatch(setModalState(null));
			getNotification('Photo has been uploaded', 'success');
			dispatch(setPhotoAction(categories, () => {
			}, search));
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

export function setSearch(value) {
	return {
		type: SET_SEARCH,
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
