import { DEFAULT_REGEX_EXP } from '@constants/regex';
import { v4 as uuidv4 } from 'uuid';

export const validateQuestionItem = (obj) => {
	let valid = true;

	const testQuestion = DEFAULT_REGEX_EXP.test(obj.question);
	const test1 = DEFAULT_REGEX_EXP.test(obj.answer1);
	const test2 = DEFAULT_REGEX_EXP.test(obj.answer2);
	const test3 = DEFAULT_REGEX_EXP.test(obj.answer3);
	const test4 = DEFAULT_REGEX_EXP.test(obj.answer4);
	if (!testQuestion || !test1 || !test2 || !test3 || !test4) {
		valid = false;
	}
	
	if (!obj.correct.value) {
		valid = false;
	}
	
	if (obj.question.length < 2) valid = false;
	if (obj.question.length > 120) valid = false;
	
	if (obj.answer1.length < 1) valid = false;
	if (obj.answer1.length > 70) valid = false;

	if (obj.answer2.length < 1) valid = false;
	if (obj.answer2.length > 70) valid = false;

	if (obj.answer3.length < 1) valid = false;
	if (obj.answer3.length > 70) valid = false;

	if (obj.answer4.length < 1) valid = false;
	if (obj.answer4.length > 70) valid = false;

	return valid;
};

export const fullQuestionValidate = (obj) => {
	const titleTest = validateQuestionTitle(obj.question);
	const answer1Test = validateQuestionAnswer(obj.answer1, 1);
	const answer2Test = validateQuestionAnswer(obj.answer2, 2);
	const answer3Test = validateQuestionAnswer(obj.answer3, 3);
	const answer4Test = validateQuestionAnswer(obj.answer4, 4);
	const correctTest = validateQuestionCorrect(obj.correct);
	
	return {
		...titleTest,
		...answer1Test,
		...answer2Test,
		...answer3Test,
		...answer4Test,
		...correctTest,
	};
};

export const validateQuestionTitle = (title) => {
	const errors = {
		
	};
	if (title === '') {
		errors.question = 'Required field';
		return errors;
	}
	if (!DEFAULT_REGEX_EXP.test(title)) {
		errors.question = 'Please enter valid question';
		return errors;
	}
	if (title.length < 2) {
		errors.question = 'Must be at least 2 characters';
		return errors;
	}
	if (title.length > 120) {
		errors.question = 'Must be less than 120 characters';
		return errors;
	}

	return errors;
};

export const validateQuestionAnswer = (answer, number) => {
	const errors = {
	
	};
	if (answer === '') {
		errors[`answer${number}`] = 'Required field';
		return errors;
	}
	if (!DEFAULT_REGEX_EXP.test(answer)) {
		errors[`answer${number}`] = 'Please enter valid answer';
		return errors;
	}
	if (answer.length < 1) {
		errors[`answer${number}`] = 'Must be at least 1 characters';
		return errors;
	}
	if (answer.length > 70) {
		errors[`answer${number}`] = 'Must be less than 70 characters';
		return errors;
	}
	return errors;
};

export const validateQuestionCorrect = (correct) => {
	const errors = {
		
	};
	
	if (!correct?.value) {
		errors.correct = 'Required field';
		return errors;
	}
	if (typeof correct?.value !== 'number') {
		errors.correct = 'Must be one of: 1,2,3,4';
		return errors;
	}
	if (![1, 2, 3, 4].includes(correct?.value)) {
		errors.correct = 'Must be one of: 1,2,3,4';
		return errors;
	}
	return errors;
};

export function getValidationStatus(arr) {
	const status = arr.map((item) => item.valid);
	return status.includes(false);
}

export function generateQuizDTO(mainInfo, questions) {
	const quizDTO = {
		title: mainInfo.title.trim(),
		userAnswers: [],
		timeToAnswer: Number(mainInfo.timeToAnswer),
		description: mainInfo.description.trim(),
		category: mainInfo.category,
		photo: mainInfo.file[0],
		questions: [],
	};
	questions.forEach((item) => {
		quizDTO.questions = [...quizDTO.questions, generateQuestionsDTO(item)];
	});
	return quizDTO;
}

export function generateQuestionsDTO(questionItem) {
	return {
		id: uuidv4(),
		question: questionItem.question,
		answers: [
			{
				id: uuidv4(),
				text: questionItem.answer1.trim(),
				correct: questionItem.correct.value === 1,
			},
			{
				id: uuidv4(),
				text: questionItem.answer2.trim(),
				correct: questionItem.correct.value === 2,
			},
			{
				id: uuidv4(),
				text: questionItem.answer3.trim(),
				correct: questionItem.correct.value === 3,
			},
			{
				id: uuidv4(),
				text: questionItem.answer4.trim(),
				correct: questionItem.correct.value === 4,
			},
		],
	};
}

export function fullMainInfoValidate(obj) {
	const titleTest = validateMainInfoTitle(obj.title);
	const descriptionTest = validateDescription(obj.description);
	const categoryTest = validateCategory(obj.category);
	const timeTest = validateTimeToAnswer(Number(obj.timeToAnswer));
	const fileTest = validateFile(obj.file);

	return {
		...titleTest,
		...descriptionTest,
		...categoryTest,
		...timeTest,
		...fileTest,
	};
}

function validateMainInfoTitle(title) {
	const errors = {};
	
	if (title === '') {
		errors.title = 'Required field';
		return errors;
	}
	if (!DEFAULT_REGEX_EXP.test(title)) {
		errors.title = 'Please enter valid Quiz title';
		return errors;
	}
	if (title.length < 5) {
		errors.title = 'Must be at least 5 characters';
		return errors;
	}
	if (title.length > 40) {
		errors.title = 'Must be less than 50 characters';
		return errors;
	}
	return errors;
}

function validateTimeToAnswer(time) {
	const errors = {};
	
	if (typeof time !== 'number') {
		errors.timeToAnswer = 'Time to answer must be number';
		return errors;
	}
	
	if (!time) {
		errors.timeToAnswer = 'Required field';
		return errors;
	}
	
	if (time < 5) {
		errors.timeToAnswer = 'Min 5 seconds';
		return errors;
	}
	
	if (time > 120) {
		errors.timeToAnswer = 'Max 120 seconds';
		return errors;
	}
	
	return errors;
}

function validateCategory(category) {
	const errors = {};
	
	if (!category?.value) {
		errors.category = 'Required field';
		return errors;
	}
	
	return errors;
}

function validateDescription(description) {
	const errors = {};
	if (description === '') {
		errors.description = 'Required field';
		return errors;
	}
	if (description.length < 20) {
		errors.description = 'Must be at least 20 characters';
		return errors;
	}
	if (description.length > 255) {
		errors.description = 'Must be less than 255 characters';
		return errors;
	}
	return errors;
}

function validateFile(file) {
	const errors = {};
	
	if (!file.length) {
		errors.file = 'Required field';
		return errors;
	}
	
	if (file.size / 1024 / 1024 > 20) {
		errors.file = 'File too Big, please select a file less than 20mb';
		return errors;
	}
	
	return errors;
}
