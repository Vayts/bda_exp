import {
	ADD_QUESTION_FORM,
	SET_ACTIVE_QUESTION,
	SET_MAIN_INFO,
	SET_QUESTIONS,
} from '@store/createQuiz/actionTypes';
import { v4 as uuid } from 'uuid';
import { fullMainInfoValidate, fullQuestionValidate, validateQuestionItem } from '@helpers/questions.helper';
import { getNotification } from '@src/notifications/notification';
import { setQuizTrends } from '@store/quiz/actions';

export const addQuestionForm = () => {
	return {
		type: ADD_QUESTION_FORM,
		payload: {
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
	};
};

export const setActiveQuestion = (number) => {
	return {
		type: SET_ACTIVE_QUESTION,
		payload: number,
	};
};
export const editQuestionForm = (id, questions, name, data) => {
	return (dispatch) => {
		const newState = questions.map((item) => {
			if (id === item.id) {
				return {
					...item,
					isTouched: true,
					touchedObj: {
						...item.touchedObj,
						[name]: true,
					},
					errors: fullQuestionValidate(
						{
							...item,
							[name]: data,
						},
					),
					valid: validateQuestionItem({
						...item,
						isTouched: true,
						[name]: data,
					}),
					[name]: data,
				};
			}
			return item;
		});
		dispatch(setQuestions(newState));
	};
};

export const setQuestions = (questions) => {
	return {
		type: SET_QUESTIONS,
		payload: questions,
	};
};

export const editQuestionCorrect = (id, questions, correctValue) => {
	return (dispatch) => {
		const newState = questions.map((item) => {
			if (id === item.id) {
				return {
					...item,
					isTouched: true,
					touchedObj: {
						...item.touchedObj,
						correct: correctValue,
					},
					errors: fullQuestionValidate(
						{
							...item,
							correct: correctValue,
						},
					),
					valid: validateQuestionItem({
						...item,
						isTouched: true,
						correct: correctValue,
					}),
					correct: correctValue,
				};
			}
			return item;
		});
		dispatch(setQuestions(newState));
	};
};

export const deleteQuestion = (questionIndex, questions) => {
	return (dispatch) => {
		const newState = questions.filter((item, index) => {
			if (index !== questionIndex) {
				return item;
			}
			return null;
		});
		
		dispatch(setQuestions(newState, {}, {}));
		if (questions[questionIndex - 1]) {
			dispatch(setActiveQuestion(questionIndex - 1));
		} else {
			dispatch(setActiveQuestion(0));
		}
	};
};

export const editMainInfoForm = (mainInfo, name, data) => {
	return (dispatch) => {
		const newState = {
			...mainInfo,
			[name]: data,
			isTouched: true,
			touched: {
				...mainInfo.touched,
				[name]: true,
			},
			errors: fullMainInfoValidate({
				...mainInfo,
				[name]: data,
			}),
			isValid: Object.keys(fullMainInfoValidate({
				...mainInfo,
				[name]: data,
			})).length === 0,
		};
		dispatch(setMainInfo(newState));
	};
};

export const setMainInfo = (values) => {
	return {
		type: SET_MAIN_INFO,
		payload: {
			...values,
		},
	};
};

export const createQuizFetch = (values, questions, navigate, axiosPrivate) => {
	return async (dispatch) => {
		const formData = new FormData();
		const keys = Object.keys(values);
		keys.forEach((el) => {
			if (el !== 'photo' && el !== 'questions' && el !== 'category') {
				formData.set(el, values[el]);
			}
			if (el === 'category') {
				formData.set(el, values[el].value);
			}
			if (el === 'questions') {
				formData.set('questions', JSON.stringify(values.questions));
			}
			if (el === 'photo') {
				formData.append('file', values.photo);
			}
		});
		try {
			const response = await axiosPrivate.post('/quiz/create', formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				},
			);
			getNotification('Quiz has been created', 'success');
			const trendsArr = [];
			response.data.trends.forEach((item) => {
				trendsArr.push({ value: item._id, text: item._id });
			});
			dispatch(setQuizTrends(trendsArr));
			navigate('/quiz');
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		}
	};
};
