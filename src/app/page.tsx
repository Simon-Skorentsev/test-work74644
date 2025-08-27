import type { Metadata } from 'next';

import ProductGrid from '@/components/ProductGrid/ProductGrid';

export const metadata: Metadata = {
	title: 'Home - DummyShop',
	description: 'Discover amazing products in our online store',
};

export default function HomePage() {
	return (
		<div className='container'>
			<section>
				<h1
					style={{
						textAlign: 'center',
						marginBottom: '2rem',
						color: 'var(--dark-color)',
						fontSize: '2.5rem',
						fontWeight: '700',
					}}
				>
					Our Products
				</h1>
				<ProductGrid />
			</section>
		</div>
	);
}
