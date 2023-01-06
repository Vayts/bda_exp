import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';
import { TextField } from '@src/components/UI/TextField/TextField';
import { ErrorMessage } from '@src/components/ErrorMessage/ErrorMessage';
import { Button } from '@src/components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { registerFetch } from '@store/base/actions';

export const RegisterForm = ({ setAuthState }) => {
	const [isLoading, setLoading] = useState(false);
	const dispatch = useDispatch();
	
	const validationSchema = yup.object().shape({
		login: yup.string()
			.matches(/^[A-Za-z][A-Za-z0-9_]+$/, 'Please enter valid login name')
			.min(5, 'Must be at least 5 characters')
			.max(20, 'Must be less than 20 characters')
			.required('Required field'),
		password: yup.string()
			.password()
			.min(8, 'Must be at least 8 characters')
			.minLowercase(1, 'Minimum of 1 lower case letter')
			.minUppercase(1, 'Minimum of 1 upper case letter')
			.minNumbers(1, 'Minimum of 1 numeric character')
			.minSymbols(0)
			.required('Required field'),
	});
	
	const onSubmit = (values) => {
		dispatch(registerFetch(values, setLoading, setAuthState));
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
				touched,
				handleSubmit,
			}) => {
				return (
					<>
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
						<Button type='submit' clickHandler={handleSubmit} margin='30px 0 0' width='100%' height='40px' fz='14px' isLoading={isLoading} text='Create account'/>
					</>
				);
			}}
		</Formik>
	);
};

RegisterForm.propTypes = {
	setAuthState: PropTypes.func,
};
