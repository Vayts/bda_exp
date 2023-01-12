import React, { useCallback, useState } from 'react';
import { Formik } from 'formik';
import FileHandler from '@src/components/UI/FileHandler/FileHandler';
import { TextField } from '@src/components/UI/TextField/TextField';
import { ErrorMessage } from '@src/components/ErrorMessage/ErrorMessage';
import { TextArea } from '@src/components/UI/TextArea/TextArea';
import { Button } from '@src/components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getSearchPhoto } from '@store/photo/selectors';
import { sendPhotoAction } from '@store/photo/actions';
import { fileTypeValidation } from '@helpers/photo.helper';
import { getNotification } from '@src/notifications/notification';
import * as yup from 'yup';
import { DEFAULT_REGEX } from '@constants/regex';
import { ModalTitle } from '@src/components/Modal/AddPhotoModal/style';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';

export const AddPhotoModal = () => {
	const dispatch = useDispatch();
	const categories = useSelector(getCategories);
	const search = useSelector(getSearchPhoto);
	const axiosPrivate = useAxiosPrivate();
	const [isLoading, setLoading] = useState(false);

	const onSubmit = (values) => {
		dispatch(sendPhotoAction(values, categories, search, axiosPrivate, setLoading));
	};

	const onFileChange = useCallback((setFieldValue, setFieldTouched) => {
		return (event) => {
			if (fileTypeValidation(event.target.files[0])) {
				setFieldTouched('file', true, false);
				setFieldValue('file', [event.target.files[0]]);
			} else {
				getNotification('Invalid file type', 'error');
			}
		};
	}, []);

	const validationSchema = yup.object().shape({
		description: yup.string()
			.max(255, 'Must be less than 256 characters'),
		title: yup.string()
			.trim()
			.strict()
			.matches(DEFAULT_REGEX, 'Please enter valid title')
			.min(5, 'Must be at least 5 characters')
			.max(20, 'Must be less than 20 characters')
			.required('Required field'),
		categories: yup.string()
			.matches(DEFAULT_REGEX, 'Categories')
			.required('Required field'),
		file: yup.mixed().required('Required field'),
	});

	return (
		<>
			<ModalTitle>Add photo</ModalTitle>
			<Formik
				initialValues={{
					title: '',
					description: '',
					categories: '',
					file: [],
				}}
				onSubmit={(values) => onSubmit(values)}
				validateOnChange
				validationSchema={validationSchema}
			>
				{({
					values,
					handleSubmit,
					handleBlur,
					handleChange,
					dirty,
					isValid,
					setFieldValue,
					setFieldTouched,
				}) => {
					return (
						<>
							<FileHandler
								value={values.file}
								onChange={onFileChange(setFieldValue, setFieldTouched)}
								multiple
							/>
							<TextField
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.title}
								placeholder="Title"
								width="100%"
								height="40px"
								name="title"
								margin='10px 0 10px 0'
							/>
							<ErrorMessage name="title"/>
							<TextArea
								name='description'
								value={values.description}
								onChange={handleChange}
								onBlur={handleBlur}
								id='description'
								width='100%'
								height='100px'
								placeholder='Description'
							/>
							<ErrorMessage name="description"/>
							<TextField
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.categories}
								placeholder="Categories"
								width="100%"
								height="40px"
								name="categories"
								margin='10px 0 10px 0'
							/>
							<ErrorMessage name="categories"/>
							<Button isLoading={isLoading} primary clickHandler={handleSubmit} disabled={!(isValid && dirty) || !values.file.length || isLoading} width="100%" type="submit" height='45px' text="Send" padding='5px 0' fz='16px'/>
						</>
					);
				}}
			</Formik>
		</>
	);
};

AddPhotoModal.propTypes = {};
