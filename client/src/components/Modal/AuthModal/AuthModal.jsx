import React, { useState } from 'react';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { AuthModalTitle, AuthModalTitlesWrapper, AuthModalWrapper } from '@src/components/Modal/AuthModal/style';
import { LoginForm } from '@src/components/Modal/AuthModal/LoginForm/LoginForm';
import { RegisterForm } from '@src/components/Modal/AuthModal/RegisterForm/RegisterForm';

YupPassword(yup);

export const AuthModal = () => {
	const [authState, setAuthState] = useState('login');
	
	return (
		<AuthModalWrapper>
			<AuthModalTitlesWrapper>
				<AuthModalTitle onClick={authState === 'login' ? null : () => setAuthState('login')} isActive={authState === 'login'}>Sign In</AuthModalTitle>
				<AuthModalTitle onClick={authState === 'register' ? null : () => setAuthState('register')} isActive={authState === 'register'}>Sign Up</AuthModalTitle>
			</AuthModalTitlesWrapper>
			{authState === 'register' ? <RegisterForm setAuthState={setAuthState}/> : <LoginForm/> }
		</AuthModalWrapper>
	);
};

AuthModal.propTypes = {};
