'use client';

import dynamic from 'next/dynamic';

import { SkeletonLoader } from '@/components/ui/SkeletonLoader/SkeletonLoader';

import { Product } from '@/types/products.types';

import styles from './Products.module.scss';

const DynamicProductCard = dynamic(() => import('@/components/ui/ProductCard/ProductCard').then((mod) => mod.default), {
	ssr: false,
	loading: () => <SkeletonLoader className={styles.skeleton} />,
});

export default function Products({ products }: { products: Product[] }) {
	return (
		<div className={styles.grid}>
			{products.map((product, i) => (
				<DynamicProductCard
					key={product.id}
					product={product}
					priority={i < 6}
				/>
			))}
		</div>
	);
}
