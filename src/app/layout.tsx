import type { Metadata } from 'next';

import Content from '@/components/Layout/Content/Content';

import GlobalProviders from '@/providers/GlobalProviders';

import '@/config/_reset.scss';
import { SITE_NAME, SITE_URL } from '@/config/constants';

import { getYear } from '@/serverActions/utils/getYear';

import './global.scss';

export const metadata: Metadata = {
	title: `${SITE_NAME} - Your Online Store`,
	description: 'Shop the latest products from DummyJSON API',
	keywords: 'shop, products, online store, dummyjson',
	icons: {
		icon: '/images/logo.svg',
		shortcut: '/images/logo.svg',
	},
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: [`skorencem@gmail.com`],
	},
	metadataBase: new URL(SITE_URL),
	authors: {
		name: 'Simon Skorentsev',
		url: 'https://github.com/Simon-Skorentsev/portfolio',
	},
	formatDetection: {
		telephone: false,
	},
};

// export const viewport: Viewport = {
// 	themeColor: COLORS.bg,
// };

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
