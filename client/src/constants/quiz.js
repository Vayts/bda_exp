import { v4 as uuid } from 'uuid';

export const DEFAULT_MAIN_INFO = {
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
};

export const DEFAULT_QUESTIONS = {
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
};
