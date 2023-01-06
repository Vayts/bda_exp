import { SET_CATEGORY, SET_CURRENT, SET_GAME_QUIZ, SET_QUIZ_LIST, SET_QUIZ_TRENDS, SET_RESULTS, SET_SEARCH } from '@store/quiz/actionTypes';

const initialState = {
	quizList: [],
	currentCategory: 'all',
	search: '',
	currentQuiz: null,
	quizTrends: [],
	gameQuiz: null,
	results: null,
	startTime: null,
};

export const quizReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_QUIZ_LIST:
		return {
			...state,
			quizList: action.payload,
		};
	case SET_CURRENT:
		return {
			...state,
			currentQuiz: action.payload,
		};
	case SET_CATEGORY:
		return {
			...state,
			currentCategory: action.payload,
		};
	case SET_QUIZ_TRENDS:
		return {
			...state,
			quizTrends: action.payload,
		};
	case SET_GAME_QUIZ:
		return {
			...state,
			gameQuiz: action.payload,
		};
	case SET_SEARCH:
		return {
			...state,
			search: action.payload,
		};
	case SET_RESULTS:
		return {
			...state,
			results: action.payload,
		};
	default:
		return state;
	}
};
