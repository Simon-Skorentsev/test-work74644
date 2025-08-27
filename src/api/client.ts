import axios, { AxiosError, AxiosInstance } from 'axios';

import { ApiError } from '@/types';

const BASE_URL = 'https://dummyjson.com';

class ApiClient {
	private client: AxiosInstance;

	constructor() {
		this.client = axios.create({
			baseURL: BASE_URL,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
			},
		});

		this.setupInterceptors();
	}

	private setupInterceptors(): void {
		// Request interceptor to add auth token
		this.client.interceptors.request.use(
			(config) => {
				if (typeof window !== 'undefined') {
					const token = localStorage.getItem('auth_token');
					if (token && config.headers) {
						config.headers.Authorization = `Bearer ${token}`;
					}
				}
				return config;
			},
			(error) => Promise.reject(error),
		);

		// Response interceptor for error handling
		this.client.interceptors.response.use(
			(response) => response,
			(error: AxiosError) => {
				const apiError: ApiError = {
					message: 'An unexpected error occurred',
					status: error.response?.status,
				};

				if (error.response?.data) {
					const data = error.response.data as any;
					apiError.message = data.message || data.error || apiError.message;
				} else if (error.message) {
					apiError.message = error.message;
				}

				// Handle 401 unauthorized
				if (error.response?.status === 401 && typeof window !== 'undefined') {
					localStorage.removeItem('auth_token');
					localStorage.removeItem('auth_user');
					window.location.href = '/login';
				}

				return Promise.reject(apiError);
			},
		);
	}

	get instance(): AxiosInstance {
		return this.client;
	}
}

export const apiClient = new ApiClient().instance;
