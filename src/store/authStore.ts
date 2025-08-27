import { create } from 'zustand';

import { authApi } from '@/api/auth';

import { AuthState, LoginCredentials, User } from '@/types';

const useAuthStore = create<AuthState>((set, get) => ({
	user: null,
	isLoading: false,
	error: null,
	isAuthenticated: false,

	login: async (credentials: LoginCredentials): Promise<boolean> => {
		set({ isLoading: true, error: null });

		try {
			const response = await authApi.login(credentials);

			const user: User = {
				id: response.id,
				username: response.username,
				email: response.email,
				firstName: response.firstName,
				lastName: response.lastName,
				gender: response.gender,
				image: response.image,
				token: response.token,
				refreshToken: response.refreshToken,
			};

			// Store in localStorage
			if (typeof window !== 'undefined') {
				localStorage.setItem('auth_token', response.token);
				localStorage.setItem('auth_user', JSON.stringify(user));
			}

			set({
				user,
				isAuthenticated: true,
				isLoading: false,
				error: null,
			});

			return true;
		} catch (error: any) {
			set({
				isLoading: false,
				error: error.message || 'Login failed',
				isAuthenticated: false,
				user: null,
			});
			return false;
		}
	},

	logout: () => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem('auth_token');
			localStorage.removeItem('auth_user');
		}

		set({
			user: null,
			isAuthenticated: false,
			error: null,
		});
	},

	clearError: () => {
		set({ error: null });
	},

	checkAuth: () => {
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('auth_token');
			const userStr = localStorage.getItem('auth_user');

			if (token && userStr) {
				try {
					const user = JSON.parse(userStr) as User;
					set({
						user,
						isAuthenticated: true,
						error: null,
					});
				} catch (error) {
					// Invalid user data in localStorage
					localStorage.removeItem('auth_token');
					localStorage.removeItem('auth_user');
					set({
						user: null,
						isAuthenticated: false,
						error: null,
					});
				}
			}
		}
	},
}));

export default useAuthStore;
