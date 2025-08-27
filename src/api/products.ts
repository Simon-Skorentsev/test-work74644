import { apiClient } from './client';
import { ProductsResponse } from '@/types';

export const productsApi = {
	getProducts: async (limit: number = 12, skip: number = 0): Promise<ProductsResponse> => {
		const response = await apiClient.get<ProductsResponse>('/products', {
			params: {
				limit,
				skip,
			},
		});
		return response.data;
	},

	getProductsByCategory: async (category: string, limit: number = 12, skip: number = 0): Promise<ProductsResponse> => {
		const response = await apiClient.get<ProductsResponse>(`/products/category/${category}`, {
			params: {
				limit,
				skip,
			},
		});
		return response.data;
	},

	searchProducts: async (query: string, limit: number = 12, skip: number = 0): Promise<ProductsResponse> => {
		const response = await apiClient.get<ProductsResponse>('/products/search', {
			params: {
				q: query,
				limit,
				skip,
			},
		});
		return response.data;
	},
};
