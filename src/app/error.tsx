'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error('Application error:', error);
	}, [error]);

	return (
		<div className='container'>
			<div
				style={{
					textAlign: 'center',
					padding: '4rem 2rem',
					maxWidth: '500px',
					margin: '0 auto',
				}}
			>
				<div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>

				<h1
					style={{
						fontSize: '2rem',
						fontWeight: '600',
						color: 'var(--danger-color)',
						marginBottom: '1rem',
					}}
				>
					Something went wrong!
				</h1>

				<p
					style={{
						fontSize: '1.1rem',
						color: 'var(--gray-600)',
						marginBottom: '2rem',
						lineHeight: '1.6',
					}}
				>
					We encountered an unexpected error. Please try again.
				</p>

				<div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
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
					<details
						style={{
							marginTop: '2rem',
							padding: '1rem',
							background: 'var(--gray-100)',
							borderRadius: 'var(--border-radius)',
							textAlign: 'left',
						}}
					>
						<summary style={{ cursor: 'pointer', fontWeight: '600' }}>Error Details (Development)</summary>
						<pre
							style={{
								marginTop: '1rem',
								fontSize: '0.8rem',
								whiteSpace: 'pre-wrap',
								wordBreak: 'break-word',
							}}
						>
							{error.message}
							{error.stack && `\n\n${error.stack}`}
						</pre>
					</details>
				)}
			</div>
		</div>
	);
}
