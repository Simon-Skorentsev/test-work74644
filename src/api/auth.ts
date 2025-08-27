import { apiClient } from './client';
import { LoginCredentials, LoginResponse } from '@/types';

export const authApi = {
	login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
		const response = await apiClient.post<LoginResponse>('/auth/login', {
			username: credentials.username,
			password: credentials.password,
			expiresInMins: 30, // optional, defaults to 60
		});
		return response.data;
	},

	getCurrentUser: async (): Promise<LoginResponse> => {
		const response = await apiClient.get<LoginResponse>('/auth/me');
		return response.data;
	},

	refreshToken: async (refreshToken: string): Promise<LoginResponse> => {
		const response = await apiClient.post<LoginResponse>('/auth/refresh', {
			refreshToken,
			expiresInMins: 30,
		});
		return response.data;
	},
};
