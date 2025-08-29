'use client';

import Image from 'next/image';

import { useAuthStore } from '@/providers/authProvider';

import { Button } from '../Button/Button';

import { Product } from '@/types/products.types';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
	product: Product;
	priority?: boolean;
}

const ProductCard = ({ product, priority = false }: ProductCardProps) => {
	const isLoggedIn = useAuthStore((store) => store.isLoggedIn);
	console.log(123, process.env.NEXT_PUBLIC_SITE_URL);
	const handleAddToCart = () => {
		console.log('Add to cart:', product.id);
	};

	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<Image
					src={product.thumbnail}
					alt={product.title}
					className={styles.image}
					priority={priority}
					fill={true}
					sizes='(max-width: 576px) 100vw, (max-width: 768px) 250px, 280px'
				/>
			</div>

			<div className={styles.content}>
				<h3 className={styles.title}>{product.title}</h3>
				<p className={styles.category}>{product.category}</p>
				<div className={styles.price}>${product.price.toFixed(2)}</div>

				{isLoggedIn && (
					<Button
						className={styles.buy}
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
