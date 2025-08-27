import { create } from 'zustand';

import { productsApi } from '@/api/products';

import { ProductsState } from '@/types';

const useProductsStore = create<ProductsState>((set, get) => ({
	products: [],
	isLoading: false,
	error: null,

	fetchProducts: async (): Promise<void> => {
		set({ isLoading: true, error: null });

		try {
			const response = await productsApi.getProducts(12, 0);
			set({
				products: response.products,
				isLoading: false,
				error: null,
			});
		} catch (error: any) {
			set({
				isLoading: false,
				error: error.message || 'Failed to fetch products',
				products: [],
			});
		}
	},

	clearError: () => {
		set({ error: null });
	},
}));

export default useProductsStore;
