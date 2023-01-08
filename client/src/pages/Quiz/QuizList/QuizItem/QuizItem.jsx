import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrent } from '@store/quiz/actions';
import { Button } from '@src/components/UI/Button/Button';
import { setModalState } from '@store/base/actions';
import { BASE_URL } from '@constants/base';
import {
	QuizBottomContent, QuizCategory,
	QuizItemDescription,
	QuizItemImg, QuizItemInfoItem,
	QuizItemInfoList, QuizItemInfoText,
	QuizItemTitle,
	QuizListItem, QuizSubContent, QuizWithPhotoIcon,
} from './style';

export const QuizItem = ({ quiz }) => {
	const dispatch = useDispatch();
	
	const selectQuiz = useCallback((item) => {
		return () => {
			dispatch(setModalState('preQuiz'));
			dispatch(setCurrent(item));
		};
	}, []);
	
	return (
		<QuizListItem key={quiz._id}>
			{quiz.withPhoto ? <QuizWithPhotoIcon className='icon-photo'/> : null}
			<QuizItemImg src={`${BASE_URL}/photo/download/${quiz.photo}`} alt={`${quiz.title} image`}/>
			<QuizBottomContent>
				<QuizCategory>{`#${quiz.category}`}</QuizCategory>
				<QuizItemTitle>{quiz.title}</QuizItemTitle>
				<QuizItemDescription>{quiz.description.length > 100 ? `${quiz.description.slice(0, 100)}...` : quiz.description}</QuizItemDescription>
				<QuizSubContent>
					<QuizItemInfoList>
						<QuizItemInfoItem className='icon-time'>
							<QuizItemInfoText>
								{quiz.timeToAnswer}
							</QuizItemInfoText>
						</QuizItemInfoItem>
						<QuizItemInfoItem className='icon-question'>
							<QuizItemInfoText>
								{quiz.questionsLength}
							</QuizItemInfoText>
						</QuizItemInfoItem>
					</QuizItemInfoList>
					<Button clickHandler={selectQuiz(quiz)} text='Play' width='40%' height='20px' fz='12px' margin='0'/>
				</QuizSubContent>
			</QuizBottomContent>
		</QuizListItem>
	);
};

QuizItem.propTypes = {
	quiz: PropTypes.shape({
		_id: PropTypes.string,
		photo: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		questionsLength: PropTypes.number,
		timeToAnswer: PropTypes.number,
		category: PropTypes.string,
		withPhoto: PropTypes.bool,
	}),
};
