import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getActiveQuestion,
	getQuestionsForm, getQuizMainInfo,
} from '@store/createQuiz/selectors';
import { QuestionAddButton, QuestionItem, QuestionListWrapper } from '@src/pages/CreateQuiz/QuestionList/style';
import { addQuestionForm, setActiveQuestion } from '@store/createQuiz/actions';

export const QuestionList = () => {
	const questions = useSelector(getQuestionsForm);
	const activeQuestion = useSelector(getActiveQuestion);
	const mainInfo = useSelector(getQuizMainInfo);
	const dispatch = useDispatch();
	
	const changeActiveQuestion = (index) => {
		return () => {
			if (index !== activeQuestion) {
				dispatch(setActiveQuestion(index));
			}
		};
	};
	
	const addQuestion = () => {
		if (questions.length < 9) {
			dispatch(addQuestionForm(questions, mainInfo.withPhoto));
		}
	};
	
	return (
		<QuestionListWrapper>
			{questions.map((item, index) => {
				return (
					<QuestionItem
						key={item.id}
						valid={item.valid}
						touched={Object.keys(item.touchedObj).length > 0}
						active={index === activeQuestion}
						onClick={changeActiveQuestion(index)}
					>
						{index + 1}
					</QuestionItem>
				);
			})}
			{questions.length < 8 ? <QuestionAddButton onClick={() => addQuestion()}><span className='icon-close'/></QuestionAddButton> : null}
		</QuestionListWrapper>
	);
};
