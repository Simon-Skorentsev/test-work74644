'use client';

import { useAuthStore } from '@/providers/authProvider';

import styles from './Footer.module.scss';

const FooterText = ({ year }: { year: number }) => {
	const { user, isLoggedIn } = useAuthStore((store) => store);

	return (
		<p className={styles.footerText}>
			© {year}
			{isLoggedIn && user && <span className={styles.userEmail}> • Logged as {user.email}</span>}
		</p>
	);
};

export default FooterText;
