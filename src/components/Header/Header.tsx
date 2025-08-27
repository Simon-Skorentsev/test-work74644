'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import useAuthStore from '@/store/authStore';

import styles from './Header.module.scss';

const Header = () => {
	const { user, isAuthenticated, logout, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	const handleLogout = () => {
		logout();
	};

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

					<nav className={styles.nav}>
						{isAuthenticated && user ? (
							<div className={styles.userInfo}>
								<span className={styles.userName}>
									{user.firstName} {user.lastName}
								</span>
								<button
									onClick={handleLogout}
									className={`btn btnDanger ${styles.logoutBtn}`}
								>
									Logout
								</button>
							</div>
						) : (
							<Link
								href='/login'
								className='btn btnPrimary'
							>
								Login
							</Link>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
