'use client';

import dynamic from 'next/dynamic';

import { SkeletonLoader } from '@/components/ui/SkeletonLoader/SkeletonLoader';

import styles from './Footer.module.scss';

const DynamicFooterText = dynamic(() => import('./FooterDate/FooterDate').then((mod) => mod.default), {
	ssr: false,
	loading: () => <SkeletonLoader className={styles.skeleton} />,
});

const Footer = ({ year }: { year: number }) => {
	return (
		<footer className={styles.footer}>
			<DynamicFooterText year={year} />
		</footer>
	);
};

export default Footer;
