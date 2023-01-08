import {
	ADD_QUESTION_FORM,
	SET_ACTIVE_QUESTION,
	SET_MAIN_INFO,
	SET_QUESTIONS,
} from '@store/createQuiz/actionTypes';
import { v4 as uuid } from 'uuid';

const initialState = {
	mainInfo: {
		title: '',
		description: '',
		category: null,
		timeToAnswer: '',
		file: [],
		fileEdit: [],
		isValid: false,
		isTouched: false,
		withPhoto: false,
		errors: {},
		touched: {},
		saved: false,
	},
	questions: {
		questionList: [
			{
				id: uuid(),
				question: '',
				correct: '',
				valid: false,
				isTouched: false,
				answer1: '',
				answer2: '',
				answer3: '',
				answer4: '',
				errors: {},
				touchedObj: {},
			},
		],
		activeQuestion: 0,
	},
	questionPhotos: [],
};

export const createQuizReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_MAIN_INFO:
		return {
			...state,
			mainInfo: action.payload,
		};
	case ADD_QUESTION_FORM:
		return {
			...state,
			questions: {
				...state.questions,
				activeQuestion: state.questions.questionList.length,
				questionList: [...state.questions.questionList, action.payload],
			},
		};
	case SET_ACTIVE_QUESTION:
		return {
			...state,
			questions: {
				...state.questions,
				activeQuestion: action.payload,
			},
		};
	case SET_QUESTIONS:
		return {
			...state,
			questions: {
				...state.questions,
				questionList: action.payload,
			},
		};
	default:
		return state;
	}
};
