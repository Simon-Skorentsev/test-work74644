import cn from 'clsx';
import Link from 'next/link';

import styles from './not-found.module.scss';

export default function NotFound() {
	return (
		<div className={cn('container', styles.container)}>
			<h1 className={styles.title}>404</h1>
			<h2 className={styles.subtitle}>Page Not Found</h2>
			<p className={styles.text}>Sorry, we&nbsp;couldn&rsquo;t find the page you&rsquo;re looking for.</p>
			<Link
				href='/'
				className='btn btnPrimary'
				style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}
			>
				Go Home
			</Link>
		</div>
	);
}
