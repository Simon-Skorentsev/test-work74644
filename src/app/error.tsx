'use client';

import cn from 'clsx';
import { useEffect } from 'react';

import styles from './error.module.scss';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error('Application error:', error);
	}, [error]);

	return (
		<div className={cn('container', styles.container)}>
			<div>
				<div className={styles.warn}>⚠️</div>
				<h1 className={styles.title}>Something went wrong!</h1>
				<p className={styles.text}>We encountered an unexpected error. Please try again.</p>
				<div className={styles.buttons}>
					<button
						onClick={reset}
						className='btn btnPrimary'
						style={{ fontSize: '1rem', padding: '0.75rem 1.5rem' }}
					>
						Try Again
					</button>
					<button
						onClick={() => (window.location.href = '/')}
						className='btn'
						style={{
							fontSize: '1rem',
							padding: '0.75rem 1.5rem',
							background: 'var(--gray-200)',
							color: 'var(--gray-700)',
							border: '1px solid var(--gray-300)',
						}}
					>
						Go Home
					</button>
				</div>
				{process.env.NODE_ENV === 'development' && (
					<details className={styles.details}>
						<summary className={styles.summary}>Error Details (Development)</summary>
						<pre className={styles.pre}>
							{error.message}
							{error.stack && `\n\n${error.stack}`}
						</pre>
					</details>
				)}
			</div>
		</div>
	);
}
