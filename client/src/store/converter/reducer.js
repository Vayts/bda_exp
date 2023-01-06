import { CLEAR_RESULT, SET_RESULT } from '@store/converter/actionTypes';

const initialState = {
	result: null,
};

export const converterReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_RESULT:
		return { result: {
			value: action.payload.value,
			text: action.payload.time,	
		} };
	case CLEAR_RESULT:
		return { result: null };
	default:
		return state;
	}
};
