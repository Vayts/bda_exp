import React, { useCallback, useEffect } from 'react';
import FileHandler from '@src/components/UI/FileHandler/FileHandler';
import { TextField } from '@src/components/UI/TextField/TextField';
import { Select } from '@src/components/UI/Select/Select';
import { QUIZ_CATEGORY } from '@constants/quizCategory';
import { TextArea } from '@src/components/UI/TextArea/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizMainInfo } from '@store/createQuiz/selectors';
import { NotFormikErrorMessage } from '@src/components/NotFormikErrorMessage/NotFormikErrorMessage';
import { editMainInfoForm, setMainInfo } from '@store/createQuiz/actions';
import { fileTypeValidation } from '@helpers/photo.helper';
import { getNotification } from '@src/notifications/notification';
import { DEFAULT_MAIN_INFO } from '@constants/quiz';
import { FormMainInfo, FormUpperContent, FormWrapper } from './style';

export const MainInfoForm = () => {
	const dispatch = useDispatch();
	const values = useSelector(getQuizMainInfo);
	
	useEffect(() => {
		return () => {
			dispatch(setMainInfo({ ...DEFAULT_MAIN_INFO }));
		};
	}, []);
	
	const onFileChange = useCallback(() => {
		return (e) => {
			if (fileTypeValidation(e.target.files[0])) {
				dispatch(editMainInfoForm(values, 'file', [e.target.files[0]]));
			} else {
				getNotification('Invalid file type', 'error');
			}
		};
	}, [values]);
	
	const handleChange = useCallback((name) => {
		return (e) => {
			dispatch(editMainInfoForm(values, name, e.target.value));
		};
	}, [values]);
	
	const setCategory = (value) => {
		dispatch(editMainInfoForm(values, 'category', value));
	};
	
	return (
		<>
			<FormWrapper>
				<FormUpperContent>
					<FileHandler
						value={values.file}
						onChange={onFileChange()}
						multiple={false}
						width='50%'
						height='350px'
						disabled={values.saved}
					/>
					<NotFormikErrorMessage
						shown={values.errors.file && values.touched.file}
						errorText={values.errors.file}
					/>
					<FormMainInfo>
						<TextField
							onChange={handleChange('title')}
							value={values.title}
							placeholder="Title"
							width="100%"
							height="30px"
							name="title"
							margin='20px 0 10px 0'
							disabled={values.saved}
						/>
						<NotFormikErrorMessage
							shown={values.errors.title && values.touched.title}
							errorText={values.errors.title}
						/>
						<TextField
							name='timeToAnswer'
							value={values.timeToAnswer}
							onChange={handleChange('timeToAnswer')}
							type='number'
							id='timeToAnswer'
							width='100%'
							height='30px'
							margin='10px 0 10px 0'
							placeholder='Time to answer in seconds'
							disabled={values.saved}
						/>
						<NotFormikErrorMessage
							shown={values.errors.timeToAnswer && values.touched.timeToAnswer}
							errorText={values.errors.timeToAnswer}
						/>
						<Select
							arr={QUIZ_CATEGORY.slice(1)}
							placeholder='Category'
							onChange={setCategory}
							name='category'
							selectValue={values.category?.value ? values.category.value : null}
							margin='10px 0 10px 0'
							disabled={values.saved}
						/>
						<NotFormikErrorMessage
							shown={values.errors.category && values.touched.category}
							errorText={values.errors.category}
						/>
						<TextArea
							name='description'
							value={values.description}
							onChange={handleChange('description')}
							id='description'
							width='100%'
							height='90px'
							placeholder='Description'
							disabled={values.saved}
						/>
						<NotFormikErrorMessage
							shown={values.errors.description && values.touched.description}
							errorText={values.errors.description}
						/>
					</FormMainInfo>
				</FormUpperContent>
				{/*<FormBottomContent>*/}
				{/*	<Button primary clickHandler={() => onSubmit()} disabled={!(values.isValid && values.isTouched) || values.saved} width="150px" type="button" height='40px' text="Save" padding='5px 0' fz='16px'/>*/}
				{/*	{values.saved ? <Button primary clickHandler={() => startEdit()} text='Edit' width="150px" type="button" height='40px' padding='5px 0' fz='16px'/> : null}*/}
				{/*</FormBottomContent>*/}
			</FormWrapper>
		</>
	);
};

MainInfoForm.propTypes = {};
