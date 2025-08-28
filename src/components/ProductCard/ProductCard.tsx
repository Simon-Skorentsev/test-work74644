'use client';

import Image from 'next/image';

import { useAuthStore } from '@/providers/authProvider';

import { Button } from '../ui/Button/Button';

import { Product } from '@/types/products.types';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const isLoggedIn = useAuthStore((store) => store.isLoggedIn);

	const handleAddToCart = () => {
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

				{isLoggedIn && (
					<Button
						onClick={handleAddToCart}
						variant='secondary'
					>
						Add to cart
					</Button>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
