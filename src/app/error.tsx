'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/Button/Button';
import { LinkButton } from '@/components/ui/Button/LinkButton';

import styles from './error.module.scss';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error('Application error:', error);
	}, [error]);

	return (
		<div className={styles.container}>
			<div className={styles.warn}>⚠️</div>
			<h1 className={styles.title}>Something went wrong!</h1>
			<p className={styles.text}>We encountered an unexpected error. Please try again.</p>
			<div className={styles.buttons}>
				<Button onClick={reset}>Try Again</Button>
				<LinkButton
					href={'/'}
					variant='accent'
				>
					Go Home
				</LinkButton>
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
	);
}
