import axios from 'axios';
import { CLEAR_RESULT, SET_RESULT } from '@store/converter/actionTypes';
import moment from 'moment';
import { getNotification } from '@src/notifications/notification';

export function clearResult() {
	return {
		type: CLEAR_RESULT,
	};
}

export function getExchangeRateFetch(setLoading, controller, values) {
	return async (dispatch) => {
		setLoading(true);
		
		const options = {
			method: 'GET',
			url: `https://v6.exchangerate-api.com/v6/fe3f55300b3d4f6a72521c7a/latest/${values.from.value}`,
			signal: controller.signal,
		};
		
		try {
			const response = await axios.request(options);
			setTimeout(() => {
				const data = values.amount * response.data.conversion_rates[values.to.value];
				
				if (typeof data !== 'number') {
					setLoading(false);
					getNotification('Something went wrong!', 'error');
					return false;
				}
				
				const result = {
					value: data,
					time: `${values.from.name} to ${values.to.name} conversion. ${moment().format('DD/MM/YYYY HH:mm:ss')}`,
				};
				dispatch(setResult(result));
				setLoading(false);
			}, 400);
		} catch (err) {
			setLoading(false);
			getNotification('Something went wrong!', 'error');
		}
	};
}

export const setResult = (result) => {
	return {
		type: SET_RESULT,
		payload: result,
	};
};
