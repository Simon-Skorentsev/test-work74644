'use client';

import { useEffect } from 'react';

import useAuthStore from '@/store/authStore';

import styles from './Footer.module.scss';

const Footer = () => {
	const { user, isAuthenticated, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footerContent}>
					<p className={styles.footerText}>
						© {currentYear}
						{isAuthenticated && user && <span className={styles.userEmail}> • Logged as {user.email}</span>}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
