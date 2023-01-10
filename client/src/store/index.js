import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { converterReducer } from '@store/converter/reducer';
import { photoReducer } from '@store/photo/reducer';
import { quizReducer } from '@store/quiz/reducer';
import { createQuizReducer } from '@store/createQuiz/reducer';
import { baseReducer } from '@store/base/reducer';

export const rootReducer = combineReducers({
	converter: converterReducer,
	photo: photoReducer,
	quiz: quizReducer,
	createQuiz: createQuizReducer,
	base: baseReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// store.subscribe(() => {
// 	// eslint-disable-next-line no-console
// 	console.log(store.getState());
// });
