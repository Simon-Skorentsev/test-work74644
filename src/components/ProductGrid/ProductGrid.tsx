'use client';

import { useEffect } from 'react';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import ProductCard from '@/components/ProductCard/ProductCard';

import useProductsStore from '@/store/productsStore';

import styles from './ProductGrid.module.scss';

const ProductGrid = () => {
	const { products, isLoading, error, fetchProducts, clearError } = useProductsStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return (
			<ErrorMessage
				message={error}
				onRetry={fetchProducts}
				onClose={clearError}
			/>
		);
	}

	if (products.length === 0) {
		return (
			<div className={styles.emptyState}>
				<p>No products found.</p>
				<button
					onClick={fetchProducts}
					className='btn btnPrimary'
				>
					Try again
				</button>
			</div>
		);
	}

	return (
		<div className={styles.grid}>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default ProductGrid;
