import axios from 'axios';
import { BASE_URL } from '@constants/base';

export default axios.create({
	baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});
