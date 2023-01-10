import React, { useState } from 'react';
import { TextField } from '@src/components/UI/TextField/TextField';
import { ErrorMessage } from '@src/components/ErrorMessage/ErrorMessage';
import { Button } from '@src/components/UI/Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginFetch } from '@store/base/actions';

export const LoginForm = () => {
	const [isLoading, setLoading] = useState(false);
	const dispatch = useDispatch();
	
	const validationSchema = yup.object().shape({
		login: yup.string()
			.required('Required field'),
		password: yup.string()
			.required('Required field'),
	});
	
	const onSubmit = (values) => {
		dispatch(loginFetch(values, setLoading));
	};
	
	return (
		<Formik
			initialValues={{
				login: '',
				password: '',
			}}
			onSubmit={(values) => onSubmit(values)}
			validateOnChange
			validationSchema={validationSchema}
			enableReinitialize
		>
			{({
				values,
				handleBlur,
				errors,
				handleChange,
				handleSubmit,
				touched,
			}) => {
				return (
					<form>
						<TextField
							type="login"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.login}
							placeholder="Login"
							width="300px"
							height="38px"
							name="login"
							validation={touched.login ? touched.login && errors.login ? 'error' : 'valid' : 'unTouched'}
							icon="icon-user"
							margin='0 0 10px'
						/>
						<ErrorMessage name="login"/>
						<TextField
							type="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							placeholder="Password"
							width="300px"
							height="38px"
							name="password"
							validation={touched.password ? touched.password && errors.password ? 'error' : 'valid' : 'unTouched'}
							secure
							icon="icon-password"
							margin='15px 0 15px'
						/>
						<ErrorMessage name="password"/>
						<Button type='submit' clickHandler={handleSubmit} margin='30px 0 0' width='100%' height='40px' fz='14px' isLoading={isLoading} text='Sign In'/>
					</form>
				);
			}}
		</Formik>
	);
};

LoginForm.propTypes = {};
