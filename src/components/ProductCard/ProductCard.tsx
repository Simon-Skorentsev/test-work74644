'use client';

import Image from 'next/image';

import useAuthStore from '@/store/authStore';

import { Product } from '@/types';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const { isAuthenticated } = useAuthStore();

	const handleAddToCart = () => {
		// Функционал кнопки не требуется, по заданию
		console.log('Add to cart:', product.id);
	};

	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<Image
					src={product.thumbnail}
					alt={product.title}
					width={300}
					height={200}
					className={styles.image}
					priority={false}
				/>
			</div>

			<div className={styles.content}>
				<h3 className={styles.title}>{product.title}</h3>
				<p className={styles.category}>{product.category}</p>
				<div className={styles.price}>${product.price.toFixed(2)}</div>

				{isAuthenticated && (
					<button
						onClick={handleAddToCart}
						className={`btn btnSuccess ${styles.addToCartBtn}`}
					>
						Add to cart
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
