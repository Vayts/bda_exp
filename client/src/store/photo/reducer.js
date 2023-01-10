import {
	ADD_CATEGORY, RESET_FILTERS, SET_CURRENT_PAGE, SET_PAGE, SET_PHOTO_SEARCH,
	SET_PHOTOS,
	SET_TRENDS, SET_USER_LIKES,
} from '@store/photo/actionTypes';

const initialState = {
	photoList: [],
	categoriesList: [],
	searchPhoto: '',
	trends: [],
	page: 'home',
	currentPage: 1,
	userLikes: [],
};

export const photoReducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_CATEGORY: 
		return { 
			...state,
			searchPhoto: '',
			page: null,
			currentPage: 1,
			categoriesList: action.payload, 
		};
	case SET_PHOTOS:
		return {
			...state, 
			photoList: action.payload,
		};
	case SET_PHOTO_SEARCH:
		return {
			...state,
			categoriesList: [],
			page: null,
			currentPage: 1,
			searchPhoto: action.payload,
		};
	case SET_TRENDS:
		return {
			...state,
			currentPage: 1,
			trends: action.payload,
		};
	case SET_PAGE: {
		return {
			...state,
			searchPhoto: '',
			page: action.payload,
			currentPage: 1,
		};
	}
	case RESET_FILTERS: {
		return {
			...state,
			searchPhoto: '',
			categoriesList: [],
			currentPage: 1,
			page: 'home',
		};
	}
	case SET_CURRENT_PAGE: {
		return {
			...state,
			currentPage: action.payload,
		};
	}
	case SET_USER_LIKES: {
		return {
			...state,
			userLikes: action.payload,
		};
	}
	default:
		return state;
	}
};
