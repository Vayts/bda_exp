import React, { useEffect, useState } from 'react';
import { QuestionForm } from '@src/pages/CreateQuiz/QuestionForm/QuestionForm';
import { Button } from '@src/components/UI/Button/Button';
import { QuestionList } from '@src/pages/CreateQuiz/QuestionList/QuestionList';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveQuestion, getQuestionsForm, getQuizMainInfo } from '@store/createQuiz/selectors';
import { createQuizFetch, deleteQuestion } from '@store/createQuiz/actions';
import { generateQuizDTO, getValidationStatus } from '@helpers/questions.helper';
import { COLORS } from '@constants/colors';
import { useNavigate } from 'react-router-dom';
import { removeModal } from '@store/base/actions';
import { getUser } from '@store/base/selectors';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';
import { MainInfoForm } from '@src/pages/CreateQuiz/MainInfoForm/MainInfoForm';
import {
	CreateQuizBlock,
	CreateQuizButtonWrapper,
	CreateQuizSubTitle,
	CreateQuizTitle,
	CreateQuizWrapper,
} from './style';

export const CreateQuiz = () => {
	const dispatch = useDispatch();
	const activeQuestion = useSelector(getActiveQuestion);
	const questions = useSelector(getQuestionsForm);
	const mainInfo = useSelector(getQuizMainInfo);
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const axiosPrivate = useAxiosPrivate();
	const [isLoading, setLoading] = useState(false);
	
	useEffect(() => {
		document.title = 'bDa - Create Quiz';
		
		if (!user) {
			navigate('/quiz');
		}
		
		return () => {
			dispatch(removeModal());
		};
	}, [user]);
	
	const deleteItem = () => {
		return () => {
			dispatch(deleteQuestion(activeQuestion, questions));
		};
	};
	
	const createQuiz = () => {
		dispatch(createQuizFetch(generateQuizDTO(mainInfo, questions), questions, navigate, axiosPrivate, setLoading));
	};
	
	return (
		<CreateQuizWrapper>
			<CreateQuizBlock color={COLORS.light.primary}>
				<CreateQuizTitle>Create Quiz</CreateQuizTitle>
			</CreateQuizBlock>
			<CreateQuizBlock>
				<CreateQuizSubTitle>Main Info - Stage 1</CreateQuizSubTitle>
				<MainInfoForm/>
			</CreateQuizBlock>
			<CreateQuizBlock>
				<CreateQuizSubTitle>Questions - Stage 2</CreateQuizSubTitle>
				<QuestionList/>
				<QuestionForm/>
				<CreateQuizButtonWrapper jc='flex-end'>
					<Button text='Delete' fz='12px' width='100px' height='20px' disabled={questions.length <= 1} clickHandler={deleteItem()} margin='0'/>
				</CreateQuizButtonWrapper>
			</CreateQuizBlock>
			<CreateQuizBlock>
				<CreateQuizButtonWrapper>
					<Button isLoading={isLoading} disabled={getValidationStatus(questions) || !mainInfo.isValid || isLoading} fz='20px' width='300px' height='45px' text='Create Quiz' margin='0' clickHandler={() => createQuiz()}/>
				</CreateQuizButtonWrapper>
			</CreateQuizBlock>
		</CreateQuizWrapper>
	);
};
