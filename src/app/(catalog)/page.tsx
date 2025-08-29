import type { Metadata } from 'next';

import Products from './Products';
import { productsService } from '@/services/products.service';

import styles from './page.module.scss';

export const metadata: Metadata = {
	title: 'Catalog',
	description: 'Dump catalog',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'Dump catalog',
	},
};

export const revalidate = 600;

export default async function HomePage() {
	const response = await productsService.getProducts();

	return (
		<div className='container'>
			<section>
				<h1 className={styles.title}>Our Products</h1>
				{response.products.length === 0 ? (
					<div className={styles.emptyState}>
						<p>No products found.</p>
					</div>
				) : (
					<Products products={response.products} />
				)}
			</section>
		</div>
	);
}
