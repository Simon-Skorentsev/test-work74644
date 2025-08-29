'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import { SkeletonLoader } from '@/components/ui/SkeletonLoader/SkeletonLoader';

import styles from './Header.module.scss';

const DynamicHeaderProfile = dynamic(() => import('./profile/HeaderProfile').then((mod) => mod.default), {
	ssr: false,
	loading: () => <SkeletonLoader />,
});

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerContent}>
					<Link
						href='/'
						className={styles.logo}
					>
						DummyShop
					</Link>
					<DynamicHeaderProfile />
				</div>
			</div>
		</header>
	);
};

export default Header;
