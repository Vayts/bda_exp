import {
	ADD_CATEGORY, SET_PAGE,
	SET_PHOTOS,
	SET_SEARCH,
	SET_TRENDS,
} from '@store/photo/actionTypes';

const initialState = {
	photoList: [],
	categoriesList: [],
	search: '',
	trends: [],
	page: 'home',
};

export const photoReducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_CATEGORY: 
		return { 
			...state,
			search: '',
			page: null,
			categoriesList: action.payload, 
		};
	case SET_PHOTOS:
		return {
			...state, 
			photoList: action.payload,
		};
	case SET_SEARCH:
		return {
			...state,
			categoriesList: [],
			search: action.payload,
		};
	case SET_TRENDS:
		return {
			...state,
			trends: action.payload,
		};
	case SET_PAGE: {
		return {
			...state,
			search: '',
			page: action.payload,
		};
	}
	default:
		return state;
	}
};
