import { REMOVE_MODAL, SET_AUTH, SET_MODAL_STATE } from '@store/base/actionTypes';

const initialState = {
	modal: null,
	user: null,
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
	default:
		return state;
	}
};
