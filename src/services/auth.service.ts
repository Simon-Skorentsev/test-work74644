import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

import { mockUser } from '@/config/mockData';

import { axiosClassic, instance } from '@/api/axios';

import { authStore } from '@/stores/authStore';
import { EnumSign, EnumTokens, LoginData, RegisterData } from '@/types/auth.types';
import type { User } from '@/types/user.types';

interface AuthResponse extends User {
	accessToken: string;
	refreshToken: string;
}

class AuthService {
	private signPath = '/users';
	private tokenPath = '/auth';
	private userPath = 'user';
	private authState = authStore.getState();

	async sign({
		data,
		signType,
	}: { data: LoginData; signType: EnumSign.LOGIN } | { data: RegisterData; signType: EnumSign.REGISTER }) {
		if (signType === EnumSign.LOGIN) {
			return await this.login(data);
		}

		return await this.register(data);
	}

	async initializeAuth() {
		if (this.authState.user || !this.authState.accessToken) return;

		try {
			await this.getCurrentUser();
		} catch (error) {
			this.authState.clearAuthData();
		}
	}

	// Не работает из-за CORS
	async getNewTokens() {
		try {
			const response = await axiosClassic.post<AuthResponse>(`${this.tokenPath}/refresh`);
			this.saveAuthData(response);

			return response;
		} catch (error) {
			return null;
		}
	}

	// Запроса на logout в dummyjson нет
	async logout() {
		this.removeFromStorage();

		return true;
	}

	removeFromStorage() {
		Cookies.remove(EnumTokens.ACCESS_TOKEN);
		this.authState.clearAuthData();
	}

	private async login(data: LoginData) {
		const response = await axiosClassic.post<AuthResponse>(`${this.signPath}/login`, data);
		this.saveAuthData(response);

		return response;
	}

	// Регистрации нет в dummyjson, использую юзера 'emilys' для имитации входа
	private async register(data: RegisterData) {
		console.log(123, process.env.NEXT_PUBLIC_SITE_URL);
		const response = await axiosClassic.post<AuthResponse>(`${this.signPath}/add`, data);
		response.data = mockUser;
		this.saveAuthData(response);

		return response;
	}

	private async getCurrentUser() {
		try {
			const response = await instance.get<User>(`${this.userPath}/me`);

			return response;
		} catch (error) {
			return null;
		}
	}

	private saveTokenStorage(accessToken: string) {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
			domain: 'https://test-work74644.vercel.app',
			expires: 1 / 24, //1h
			sameSite: 'strict',
			secure: true,
		});
	}

	private saveAuthData(response: AxiosResponse<AuthResponse, any>) {
		if (response.data.accessToken) {
			this.saveTokenStorage(response.data.accessToken);
			const { accessToken, id, email, firstName, gender, image, lastName, username } = response.data;

			this.authState.setAuthData({
				user: {
					id,
					email,
					firstName,
					gender,
					image,
					lastName,
					username,
				},
				accessToken,
			});
		}
	}
}

export const authService = new AuthService();
