import { SET_CATEGORY, SET_CURRENT, SET_GAME_QUIZ, SET_QUIZ_LIST, SET_QUIZ_TRENDS, SET_RESULTS } from '@store/quiz/actionTypes';
import { getNotification } from '@src/notifications/notification';
import axios from '@src/api/axios';

export function getQuizFetch(setLoading, category, search) {
	return async (dispatch) => {
		setLoading(true);
		try {
			if (category === 'all') {
				category = '';
			}
			const response = await axios.get(`/quiz/get_all?category=${category}&search=${search}`);
			dispatch(setQuizList(response.data.value));
		} catch (err) {
			getNotification('Something went wrong!', 'error');
		} finally {
			setLoading(false);
		}
	};
}

export const setQuizList = (result) => {
	return {
		type: SET_QUIZ_LIST,
		payload: result,
	};
};

export const setCurrent = (quiz) => {
	return {
		type: SET_CURRENT,
		payload: quiz,
	};
};

export const setCategory = (category) => {
	return {
		type: SET_CATEGORY,
		payload: category,
	};
};

export const getQuizTrendsFetch = () => {
	return async (dispatch) => {
		const response = await axios.get('/quiz/get_trends');
		const trendsArr = [];
		response.data.value.forEach((item) => {
			trendsArr.push({ value: item._id, text: item._id });
		});
		dispatch(setQuizTrends(trendsArr));
	};
};
export const getQuiz = (id, setLoading, navigate) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`/quiz/get_quiz/${id}`);
			dispatch(setQuiz(response.data.value[0]));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
			navigate('/quiz');
		} finally {
			setLoading(false);
		}
	};
};

export const setQuiz = (quiz) => {
	return {
		type: SET_GAME_QUIZ,
		payload: quiz,
	};
};

export const setQuizTrends = (trends) => {
	return {
		type: SET_QUIZ_TRENDS,
		payload: trends,
	};
};

export const getResultsFetch = (userAnswers, id) => {
	return async (dispatch) => {
		const body = {
			userAnswers,
		};
		
		try {
			const response = await axios.post(`/quiz/result/${id}`, JSON.stringify(body),
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			dispatch(setResult(response.data.value));
		} catch (e) {
			getNotification('Something went wrong!', 'error');
		}
	};
};

export const setResult = (result) => {
	return {
		type: SET_RESULTS,
		payload: result,
	};
};
