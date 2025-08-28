'use client';

import dynamic from 'next/dynamic';

import { SkeletonLoader } from '@/components/ui/SkeletonLoader/SkeletonLoader';

import { Product } from '@/types/products.types';

import styles from './page.module.scss';

const DynamicProductCard = dynamic(() => import('@/components/ProductCard/ProductCard').then((mod) => mod.default), {
	ssr: false,
	loading: () => <SkeletonLoader className={styles.skeleton} />,
});

export default function Products({ products }: { products: Product[] }) {
	return (
		<div className={styles.grid}>
			{products.map((product) => (
				<DynamicProductCard
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
}
