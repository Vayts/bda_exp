import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	ResultBottomWrapper, ResultButtons, ResultQuizText, ResultSubTitle,
	ResultTitle,
	ResultUpWrapper,
	ResultValue,
	ResultWrapper,
} from '@src/pages/QuizGameplay/QuizResultWindow/style';
import { getResultsFetch, setCurrent, setResult } from '@store/quiz/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ResultList } from '@src/pages/QuizGameplay/ResultList/ResultList';
import { Button } from '@src/components/UI/Button/Button';
import { getQuizResult } from '@store/quiz/selectors';
import { Loader } from '@src/components/Loader/Loader';

export const QuizResultWindow = ({ quiz, reset }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const result = useSelector(getQuizResult);
	
	useEffect(() => {
		dispatch(getResultsFetch(quiz.userAnswers, quiz._id));
		
		return () => {
			dispatch(setResult(null));
		};
	}, []);
	
	const getResult = () => {
		let correctAnswerCounter = 0;
		
		result.forEach((item) => {
			if (item) {
				correctAnswerCounter += 1;
			}
		});
		
		return {
			percent: Number(((correctAnswerCounter) / quiz.questions.length * 100).toFixed(0)),
			counter: correctAnswerCounter,
		};
	};
	
	const backToList = () => {
		dispatch(setCurrent(null));
		dispatch(setResult(null));
		navigate('/quiz');
	};
	
	return (
		result
			? (
				<ResultWrapper>
					<ResultUpWrapper resultValue={getResult().percent}>
						<ResultTitle>Results</ResultTitle>
						<ResultValue>{`${getResult().counter} correct answer(-s)`}</ResultValue>
					</ResultUpWrapper>
					<ResultBottomWrapper>
						<ResultSubTitle>Answers</ResultSubTitle>
						<ResultList userAnswers={result}/>
						<ResultSubTitle>Percentage</ResultSubTitle>
						<ResultQuizText>{`You scored ${getResult().percent}% on a quiz.`}</ResultQuizText>
						<ResultSubTitle>Counter</ResultSubTitle>
						<ResultQuizText>{`You answered ${getResult().counter} questions correctly out of ${quiz.questions.length}.`}</ResultQuizText>
						<ResultButtons>
							<Button text='Reset' clickHandler={() => reset()} width='120px' height='40px'/>
							<Button text='To List' clickHandler={() => backToList()} width='120px' height='40px'/>
						</ResultButtons>
					</ResultBottomWrapper>
				</ResultWrapper>
			) : <Loader size={80}/>
	);
};

QuizResultWindow.propTypes = {
	quiz: PropTypes.shape({
		_id: PropTypes.string,
		questions: PropTypes.array,
		userAnswers: PropTypes.array,
		timeToAnswer: PropTypes.number,
	}),
	reset: PropTypes.func,
};
