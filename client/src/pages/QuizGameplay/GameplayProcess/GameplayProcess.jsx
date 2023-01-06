import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	GameplayBottomContent,
	GameplayMainWindow,
	GameplayProcessWrapper, GamePlayQuestion,
	GameplayTimer,
	QuizStageCounter,
	QuizStageCurrent, QuizStageMax,
} from '@src/pages/QuizGameplay/GameplayProcess/style';
import { Timer } from '@src/pages/QuizGameplay/Timer/Timer';
import { ProgressBar } from '@src/pages/QuizGameplay/ProgressBar/ProgressBar';
import { AnswerList } from '@src/pages/QuizGameplay/AnswerList/AnswerList';
import { Button } from '@src/components/UI/Button/Button';
import { QuizResultWindow } from '@src/pages/QuizGameplay/QuizResultWindow/QuizResultWindow';
import { setResult } from '@store/quiz/actions';
import { useDispatch } from 'react-redux';

export const GameplayProcess = ({ quizItem }) => {
	const [quiz, setQuiz] = useState(quizItem);
	const [stage, setStage] = useState(1);
	const [time, setTime] = useState(quizItem.timeToAnswer);
	const [timeoutId, setTimeoutId] = useState(0);
	const [active, setActive] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (stage <= quiz.questions.length && time === 0) {
			nextStage();
			setTime(quiz.timeToAnswer);
		}

		if (time < 0) {
			setTime(quiz.timeToAnswer);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [time]);

	const nextStage = () => {
		setQuiz({ ...quiz, userAnswers: [...quiz.userAnswers, active?.id.toString() || null] });
		setActive(null);
		setStage(stage + 1);
		setTime(quiz.timeToAnswer);
		clearTimeout(timeoutId);
	};

	const endQuiz = () => {
		const resultArr = [...quiz.userAnswers];
		quizItem.questions.forEach((item, index) => {
			if (!resultArr[index]) {
				resultArr.push(null);
			}
		});
		setQuiz({ ...quiz, userAnswers: [...resultArr] });
		setStage(quizItem.questions.length + 1);
		clearTimeout(timeoutId);
		setActive(null);
	};

	const reset = () => {
		setQuiz(quizItem);
		setActive(null);
		setStage(1);
		clearTimeout(timeoutId);
		setTime(quiz.timeToAnswer);
		dispatch(setResult(null));
	};

	return (
		<GameplayProcessWrapper>
			{stage <= quiz.questions.length
				? (
					<>
						<ProgressBar current={stage - 1} max={quiz.questions.length}/>
						<QuizStageCounter>
							<QuizStageCurrent>{stage > quiz.questions.length ? quiz.questions.length : stage}</QuizStageCurrent>
							<QuizStageMax>{`/${quiz.questions.length}`}</QuizStageMax>
						</QuizStageCounter>
						<GameplayTimer>
							<Timer
								time={time}
								setTime={setTime}
								initial={quizItem.timeToAnswer}
								setTimeoutId={setTimeoutId}
								stage={stage}
							/>
						</GameplayTimer>
						<GameplayMainWindow>
							<GamePlayQuestion>{`${stage}. ${quiz.questions[stage - 1].question}`}</GamePlayQuestion>
							<AnswerList
								answers={quiz.questions[stage - 1].answers}
								active={active}
								setActive={setActive}
							/>
							<GameplayBottomContent>
								<Button
									clickHandler={() => endQuiz()}
									text='End'
									width='100px'
									height='40px'
									fz='18px'
								/>
								<Button
									clickHandler={() => nextStage()}
									text='Next'
									disabled={active === null}
									width='100px'
									height='40px'
									fz='18px'
								/>
							</GameplayBottomContent>
						</GameplayMainWindow>
					</>
				)
				: (
					<QuizResultWindow quiz={quiz} reset={reset}/>
				)}
		</GameplayProcessWrapper>
	);
};

GameplayProcess.propTypes = {
	quizItem: PropTypes.shape({
		questions: PropTypes.array,
		userAnswers: PropTypes.array,
		timeToAnswer: PropTypes.number,
	}),
};
