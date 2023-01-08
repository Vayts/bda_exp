import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentQUiz } from '@store/quiz/selectors';
import {
	PreQuizButtons,
	PreQuizDescription,
	PreQuizImg, PreQuizInfoItem, PreQuizInfoList, PreQuizInfoText,
	PreQuizTitle,
	PreQuizWrapper,
} from '@src/components/Modal/PreQuizModal/style';
import { Button } from '@src/components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { removeModal } from '@store/base/actions';
import { BASE_URL } from '@constants/base';

export const PreQuizModal = () => {
	const quiz = useSelector(getCurrentQUiz);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	
	const navigateToQuizProcess = () => {
		dispatch(removeModal());
		navigate(`/quiz/play/${quiz._id}`);
	};
	
	return (
		<PreQuizWrapper>
			<PreQuizTitle>{quiz.title}</PreQuizTitle>
			<PreQuizImg src={`${BASE_URL}/photo/download/${quiz.photo}`}/>
			<PreQuizDescription>{quiz.description}</PreQuizDescription>
			<PreQuizInfoList>
				<PreQuizInfoItem className='icon-time'>
					<PreQuizInfoText>
						{quiz.timeToAnswer}
					</PreQuizInfoText>
				</PreQuizInfoItem>
				<PreQuizInfoItem className='icon-question'>
					<PreQuizInfoText>
						{quiz.questionsLength}
					</PreQuizInfoText>
				</PreQuizInfoItem>
			</PreQuizInfoList>
			<PreQuizButtons>
				<Button margin='0 10px' clickHandler={() => navigateToQuizProcess()} text='Start' width='70%' height='30px'/>
			</PreQuizButtons>
		</PreQuizWrapper>
	);
};
