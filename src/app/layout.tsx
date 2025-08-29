import type { Metadata, Viewport } from 'next';

import Content from '@/components/Layout/Content/Content';

import GlobalProviders from '@/providers/GlobalProviders';

import '@/config/_reset.scss';
import { SITE_NAME } from '@/config/constants';

import { getYear } from '@/serverActions/utils/getYear';

import './global.scss';

export const metadata: Metadata = {
	title: `${SITE_NAME} - Your Online Store`,
	description: 'Shop the latest products from DummyJSON API',
	keywords: 'shop, products, online store, dummyjson',
	authors: [{ name: 'Simon' }],
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const year = await getYear();

	return (
		<html lang='en'>
			<body>
				<GlobalProviders>
					<div className='mainLayout'>
						<Content year={year}>{children}</Content>
					</div>
				</GlobalProviders>
			</body>
		</html>
	);
}
