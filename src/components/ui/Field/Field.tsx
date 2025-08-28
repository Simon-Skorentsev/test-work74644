import cn from 'clsx';
import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from './Field.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	registration: UseFormRegisterReturn;
}

export function Field({ label, error, registration, ...props }: Props) {
	return (
		<div className={styles.wrapper}>
			<label>
				<span className={styles.label}>{label}</span>
				<input
					className={cn(styles.input, error && styles.inputError)}
					{...registration}
					{...props}
				/>
			</label>
			{error && <p className={styles.errorText}>{error}</p>}
		</div>
	);
}
