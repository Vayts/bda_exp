import { REMOVE_MODAL, SET_AUTH, SET_CURRENT_PHOTO_EDIT, SET_MODAL_STATE, SET_PHOTO_SCALE } from '@store/base/actionTypes';

const initialState = {
	modal: null,
	user: null,
	photoEdit: {
		photo: null,
		func: null,
		currentPhoto: null,
		scale: 1,
	},
};

export const baseReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_MODAL_STATE:
		return {
			...state,
			modal: action.payload,
		};
	case REMOVE_MODAL:
		return {
			...state,
			modal: null,
		};
	case SET_AUTH:
		return {
			...state,
			user: action.payload,
		};
	case SET_CURRENT_PHOTO_EDIT: 
		return {
			...state,
			photoEdit: {
				...state.photoEdit,
				photo: action.payload.photo,
				func: action.payload.func,
				currentPhoto: action.payload.currentPhoto,
				width: action.payload.width,
				height: action.payload.height,
			},
		};
	case SET_PHOTO_SCALE:
		return {
			...state,
			photoEdit: {
				...state.photoEdit,
				scale: action.payload,
			},
		};
	default:
		return state;
	}
};
