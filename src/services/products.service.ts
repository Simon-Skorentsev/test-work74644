import { axiosClassic } from '@/api/axios';

import { Product } from '@/types/products.types';

interface ProductsResponse {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

class ProductsService {
	private path = '/products';

	async getProducts(limit: number = 12, skip: number = 0): Promise<ProductsResponse> {
		const response = await axiosClassic.get<ProductsResponse>(this.path, {
			params: {
				limit,
				skip,
			},
		});

		return response.data;
	}
}

export const productsService = new ProductsService();
