import React, { useEffect } from 'react';
import { TextField } from '@src/components/UI/TextField/TextField';
import {
	QuestionContentBlock,
	QuestionFormSplitter, QuestionFormTitle, QuestionFormUpperSplitter, QuestionFormUpperWrapper, QuestionFormWrapper,
} from '@src/pages/CreateQuiz/QuestionForm/style';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
	getActiveQuestion, getActiveQuestionItem,
	getQuestionsForm, getQuizMainInfo,
} from '@store/createQuiz/selectors';
import {
	editQuestionCorrect,
	editQuestionForm,
	setActiveQuestion,
	setPhotoForQuestion,
	setQuestions,
} from '@store/createQuiz/actions';
import { NotFormikErrorMessage } from '@src/components/NotFormikErrorMessage/NotFormikErrorMessage';
import { Select } from '@src/components/UI/Select/Select';
import { DEFAULT_QUESTIONS } from '@constants/quiz';
import FileHandler from '@src/components/UI/FileHandler/FileHandler';
import { fileTypeValidation } from '@helpers/photo.helper';
import { getNotification } from '@src/notifications/notification';
import { setCurrentPhotoEdit, setModalState } from '@store/base/actions';

export const QuestionForm = () => {
	const activeQuestion = useSelector(getActiveQuestion);
	const questions = useSelector(getQuestionsForm);
	const dispatch = useDispatch();
	const mainInfo = useSelector(getQuizMainInfo);
	const activeQuestionItem = useSelector(getActiveQuestionItem);
	
	useEffect(() => {
		return () => {
			dispatch(setQuestions([DEFAULT_QUESTIONS]));
			dispatch(setActiveQuestion(0));
		};
	}, []);
	
	const handleChangeFunc = (e, question, name) => {
		dispatch(editQuestionForm(question.id, questions, name, e.target.value));
	};
	//
	const setCorrect = (question, value) => {
		dispatch(editQuestionCorrect(question.id, questions, value));
	};
	
	const handlePhotoChangeFunc = () => {
		return (e) => {
			if (fileTypeValidation(e.target.files[0])) {
				dispatch(setPhotoForQuestion(activeQuestionItem.id, questions, [e.target.files[0]], 'file'));
			} else {
				getNotification('Invalid file type', 'error');
			}
		};
	};
	
	const onFileEdit = () => {
		dispatch(setModalState('editPhoto'));
		dispatch(
			setCurrentPhotoEdit(
				URL.createObjectURL(activeQuestionItem.photo.file[0]), 
				editPhotoSave, 
				activeQuestionItem.photo.file[0], 
				620, 
				380),
		);
	};
	
	const editPhotoSave = (result) => {
		dispatch(setPhotoForQuestion(activeQuestionItem.id, questions, [result], 'editFile'));
	};
	
	return (
		<QuestionFormWrapper>
			<QuestionFormTitle>{`Question №${activeQuestion + 1}`}</QuestionFormTitle>
			<QuestionFormUpperWrapper>
				{mainInfo.withPhoto
					? (
						<FileHandler
							value={
								activeQuestionItem.photo.editFile.length 
									? activeQuestionItem.photo.editFile : activeQuestionItem.photo.file
							}
							onChange={handlePhotoChangeFunc()}
							width='620px'
							height='380px'
							editable
							editFunc={onFileEdit}
						/>
					) : null}
				<QuestionFormUpperSplitter padding={mainInfo.withPhoto}>
					<TextField
						onChange={(e) => handleChangeFunc(e, activeQuestionItem, 'question')}
						value={activeQuestionItem.question || ''}
						placeholder="Question"
						width="100%"
						height="40px"
						name="question"
						margin='20px 0 10px 0'
						fontSize='18px'
					/>
					<NotFormikErrorMessage
						shown={activeQuestionItem.errors.question && activeQuestionItem.touchedObj.question}
						errorText={activeQuestionItem.errors.question}
					/>
					<Select
						arr={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}
						placeholder='Correct answer'
						name='correct'
						selectValue={activeQuestionItem.correct?.value}
						onChange={setCorrect.bind(null, activeQuestionItem)}
						margin='15px 0 20px'
					/>
					<NotFormikErrorMessage
						shown={activeQuestionItem.errors.correct && activeQuestionItem.touchedObj.correct}
						errorText={activeQuestionItem.errors.correct}
					/>
				</QuestionFormUpperSplitter>
			</QuestionFormUpperWrapper>
			<QuestionFormSplitter>
				<QuestionContentBlock>
					<TextField
						onChange={(e) => handleChangeFunc(e, activeQuestionItem, 'answer1')}
						value={activeQuestionItem.answer1}
						placeholder="Answer 1"
						width="100%"
						height="40px"
						name="answer1"
						margin='0 0 10px 0'
					/>
					<NotFormikErrorMessage
						shown={activeQuestionItem.errors.answer1 && activeQuestionItem.touchedObj.answer1}
						errorText={activeQuestionItem.errors.answer1}
					/>
				</QuestionContentBlock>
				<QuestionContentBlock>
					<TextField
						onChange={(e) => handleChangeFunc(e, activeQuestionItem, 'answer2')}
						value={activeQuestionItem.answer2}
						placeholder="Answer 2"
						width="100%"
						height="40px"
						name="answer2"
						margin='0 0 10px 0'
					/>
					<NotFormikErrorMessage
						shown={activeQuestionItem.errors.answer2 && activeQuestionItem.touchedObj.answer2}
						errorText={activeQuestionItem.errors.answer2}
					/>
				</QuestionContentBlock>
			</QuestionFormSplitter>
			<QuestionFormSplitter>
				<QuestionContentBlock>
					<TextField
						onChange={(e) => handleChangeFunc(e, activeQuestionItem, 'answer3')}
						value={activeQuestionItem.answer3}
						placeholder="Answer 3"
						width="100%"
						height="40px"
						name="answer3"
						margin='0 0 10px 0'
					/>
					<NotFormikErrorMessage
						shown={activeQuestionItem.errors.answer3 && activeQuestionItem.touchedObj.answer3}
						errorText={activeQuestionItem.errors.answer3}
					/>
				</QuestionContentBlock>
				<QuestionContentBlock>
					<TextField
						onChange={(e) => handleChangeFunc(e, activeQuestionItem, 'answer4')}
						value={activeQuestionItem.answer4}
						placeholder="Answer 4"
						width="100%"
						height="40px"
						name="answer4"
						margin='0 0 10px 0'
					/>
					<NotFormikErrorMessage
						shown={activeQuestionItem.errors.answer4 && activeQuestionItem.touchedObj.answer4}
						errorText={activeQuestionItem.errors.answer4}
					/>
				</QuestionContentBlock>
			</QuestionFormSplitter>
		</QuestionFormWrapper>
	);
};

QuestionForm.propTypes = {
	questionForm: PropTypes.shape({
		question: PropTypes.string,
		answers: PropTypes.array,
		correct: PropTypes.number,
	}),
};
