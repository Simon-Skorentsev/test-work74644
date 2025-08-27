export const API_BASE_URL = 'https://dummyjson.com';

export const API_ENDPOINTS = {
	LOGIN: '/auth/login',
	ME: '/auth/me',
	REFRESH: '/auth/refresh',
	PRODUCTS: '/products',
	PRODUCTS_SEARCH: '/products/search',
	PRODUCTS_CATEGORY: (category: string) => `/products/category/${category}`,
} as const;

export const LOCAL_STORAGE_KEYS = {
	AUTH_TOKEN: 'auth_token',
	AUTH_USER: 'auth_user',
} as const;

export const PRODUCT_LIMITS = {
	DEFAULT: 12,
	MAX: 100,
} as const;

export const ERROR_MESSAGES = {
	NETWORK_ERROR: 'Network error. Please check your connection.',
	UNAUTHORIZED: 'Invalid credentials. Please try again.',
	FORBIDDEN: 'Access denied.',
	NOT_FOUND: 'Resource not found.',
	SERVER_ERROR: 'Server error. Please try again later.',
	UNKNOWN_ERROR: 'An unexpected error occurred.',
} as const;
