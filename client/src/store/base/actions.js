import { REMOVE_MODAL, SET_AUTH, SET_CURRENT_PHOTO_EDIT, SET_MODAL_STATE, SET_PHOTO_SCALE } from '@store/base/actionTypes';
import { getNotification } from '@src/notifications/notification';
import axios from '@src/api/axios';

export const setModalState = (modalName) => {
	return {
		type: SET_MODAL_STATE,
		payload: modalName,
	};
};

export const removeModal = () => {
	return {
		type: REMOVE_MODAL,
	};
};

export const registerFetch = (userData, setLoading, setAuthState) => {
	return async () => {
		setLoading(true);
		try {
			await axios.post('/auth/register', JSON.stringify(userData), {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			getNotification('Account is set up', 'success');
			setAuthState('login');
		} catch (e) {
			if (e?.response?.data.message === 'LOGIN_IN_USE') {
				getNotification('Login already in use', 'error');
			} else {
				getNotification('Something went wrong', 'error');
			}
		} finally {
			setLoading(false);
		}
	};
};

export const loginFetch = (userData, setLoading) => {
	return async (dispatch) => {
		setLoading(true);
		try {
			const response = await axios.post('/auth/login', JSON.stringify(userData), {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			dispatch(setAuth(response.data.user));
			dispatch(setModalState(null));
			getNotification('Signed In', 'success');
		} catch (e) {
			if (e?.response?.data.message === 'WRONG_LOGIN_PASSWORD') {
				getNotification('Wrong login or password', 'error');
			} else {
				getNotification('Something went wrong', 'error');
			}
		} finally {
			setLoading(false);
		}
	};
};

export const refreshUser = (setLoading) => {
	return async (dispatch) => {
		try {
			const response = await axios.get('/auth/refresh', {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			
			if (response.data.user) dispatch(setAuth(response.data.user));
		} catch (err) {
			return err;
		} finally {
			if (setLoading) {
				setLoading(false);
			}
		}
	};
};

export function logout() {
	return async (dispatch) => {
		try {
			await axios.get('/auth/logout', {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			getNotification('Logout successfully', 'success');
			dispatch(setAuth(null));
		} catch (err) {
			return err;
		}
	};
}

export function setAuth(user) {
	return {
		type: SET_AUTH,
		payload: user,
	};
}

export function setCurrentPhotoEdit(file, func, photo, width, height) {
	return {
		type: SET_CURRENT_PHOTO_EDIT,
		payload: {
			photo: file,
			func,
			currentPhoto: photo,
			width,
			height,
		},
	};
}

export function setScale(value) {
	return {
		type: SET_PHOTO_SCALE,
		payload: value,
	};
}
