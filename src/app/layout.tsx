import type { Metadata } from 'next';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import './global.scss';

export const metadata: Metadata = {
	title: 'DummyShop - Your Online Store',
	description: 'Shop the latest products from DummyJSON API',
	keywords: 'shop, products, online store, dummyjson',
	authors: [{ name: 'DummyShop Team' }],
	viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<div className='mainLayout'>
					<Header />
					<main className='mainContent'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
