import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

import { API_URL } from '@/config/constants';

import { errorCatch } from './api.helper';
import { authService } from '@/services/auth.service';
import { EnumTokens } from '@/types/auth.types';

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': API_URL,
	},
	// withCredentials: true, // Должно быть true для обновления по refresh токену, но тогда ошибка CORS из-за настройки 'Access-Control-Allow-Origin' в ответе
};

export const axiosClassic = axios.create(options);

export const instance = axios.create(options);

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'Token Expired!' ||
				errorCatch(error) === 'Refresh token required') &&
			originalRequest
		) {
			if (originalRequest._isRetry === true) {
				authService.removeFromStorage();
				return null;
			}

			originalRequest._isRetry = true;

			try {
				await authService.getNewTokens();
				return instance.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'Token Expired!' || errorCatch(error) === 'Refresh token required') {
					authService.removeFromStorage();
					return null;
				}
			}
		}

		throw error;
	},
);
