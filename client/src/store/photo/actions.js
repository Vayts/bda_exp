import {
	ADD_CATEGORY,
	SET_PHOTOS,
	SET_SEARCH,
	SET_TRENDS,
} from '@store/photo/actionTypes';
import { getNotification } from '@src/notifications/notification';
import axios from '@src/api/axios';
import { setModalState } from '@store/base/actions';

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

export function setPhotoAction(categories, setLoading, search) {
	return async (dispatch) => {
		setLoading(true);
		const searchArr = search.trim().split(' ');
		const searchQuery = categories.concat(searchArr);
		try {
			const response = await axios.get(`/photo/list?categories=${searchQuery}`);
			dispatch(setPhoto(response.data.value));
		} catch (e) {
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
