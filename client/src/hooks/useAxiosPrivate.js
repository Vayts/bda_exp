import { axiosPrivate } from '@src/api/axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@store/base/selectors';
import { refreshUser } from '@store/base/actions';

export const useAxiosPrivate = () => {
	const dispatch = useDispatch();
	const user = useSelector(getUser);
	
	useEffect(() => {
		const requestIntercept = axiosPrivate.interceptors.request.use(
			(config) => {
				if (!config.headers.Authorization) {
					config.headers.Authorization = `Bearer ${user?.token}`;
				}
				return config;
			}, (error) => Promise.reject(error),
		);
		
		const responseIntercept = axiosPrivate.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;
				if (error?.response?.status === 403 && !prevRequest?.sent) {
					prevRequest.sent = true;
					const responseToken = await dispatch(refreshUser());
					if (responseToken) {
						prevRequest.headers.Authorization = `Bearer ${user?.token}`;
					}
					return axiosPrivate(prevRequest);
				}
				return Promise.reject(error);
			},
		);
		
		return () => {
			axiosPrivate.interceptors.request.eject(requestIntercept);
			axiosPrivate.interceptors.response.eject(responseIntercept);
		};
	}, [user]);
	
	return axiosPrivate;
};
