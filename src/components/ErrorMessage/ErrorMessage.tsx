import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
	message: string;
	onRetry?: () => void;
	onClose?: () => void;
}

const ErrorMessage = ({ message, onRetry, onClose }: ErrorMessageProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.errorBox}>
				<div className={styles.iconContainer}>
					<span className={styles.icon}>⚠️</span>
				</div>

				<div className={styles.content}>
					<h3 className={styles.title}>Oops! Something went wrong</h3>
					<p className={styles.message}>{message}</p>

					<div className={styles.actions}>
						{onRetry && (
							<button
								onClick={onRetry}
								className='btn btnPrimary'
							>
								Try Again
							</button>
						)}
						{onClose && (
							<button
								onClick={onClose}
								className={`btn ${styles.closeBtn}`}
							>
								Close
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ErrorMessage;
