import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getUser } from '@store/base/selectors';
import { getNotification } from '@src/notifications/notification';

const RequireAuth = () => {
	const userToken = useSelector(getUser);
	const navigate = useNavigate();
	
	useEffect(() => {
		if (!userToken) {
			navigate(-1);
			getNotification('Sign in to your account, please', 'error');
		}
	}, [userToken]);
	
	return (
		userToken ? <Outlet/> : null
	);
};

export default RequireAuth;
