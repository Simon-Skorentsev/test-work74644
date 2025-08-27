import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

export default function Loading() {
	return (
		<div className='container'>
			<LoadingSpinner
				size='large'
				message='Loading page...'
			/>
		</div>
	);
}
