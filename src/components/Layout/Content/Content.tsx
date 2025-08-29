'use client';

import { useEffect } from 'react';

import Footer from '@/components/Layout/Content/Footer/Footer';

import '@/config/_reset.scss';

import Header from './Header/Header';
import { authService } from '@/services/auth.service';

import styles from './Content.module.scss';

export default function Content({ children, year }: { children: React.ReactNode; year: number }) {
	useEffect(() => {
		authService.initializeAuth();
	}, []);

	return (
		<div className={styles.content}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer year={year} />
		</div>
	);
}
