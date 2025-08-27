import Link from 'next/link';

export default function NotFound() {
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
				<h1
					style={{
						fontSize: '4rem',
						fontWeight: '700',
						color: 'var(--gray-400)',
						marginBottom: '1rem',
					}}
				>
					404
				</h1>

				<h2
					style={{
						fontSize: '2rem',
						fontWeight: '600',
						color: 'var(--dark-color)',
						marginBottom: '1rem',
					}}
				>
					Page Not Found
				</h2>

				<p
					style={{
						fontSize: '1.1rem',
						color: 'var(--gray-600)',
						marginBottom: '2rem',
						lineHeight: '1.6',
					}}
				>
					Sorry, we couldn't find the page you're looking for.
				</p>

				<Link
					href='/'
					className='btn btnPrimary'
					style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}
				>
					Go Home
				</Link>
			</div>
		</div>
	);
}
