import styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
	size?: 'small' | 'medium' | 'large';
	message?: string;
}

const LoadingSpinner = ({ size = 'medium', message = 'Loading...' }: LoadingSpinnerProps) => {
	return (
		<div className={styles.container}>
			<div className={`${styles.spinner} ${styles[size]}`}></div>
			{message && <p className={styles.message}>{message}</p>}
		</div>
	);
};

export default LoadingSpinner;
