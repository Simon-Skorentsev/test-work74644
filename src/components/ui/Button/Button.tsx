import cn from 'clsx';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

export type ButtonVariants = 'primary' | 'secondary' | 'simple';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	variant?: ButtonVariants;
}

export function Button({ children, isLoading, variant = 'primary', className, ...props }: PropsWithChildren<Props>) {
	return (
		<button
			className={cn(
				styles.button,
				variant === 'primary' && styles.primary,
				variant === 'secondary' && styles.secondary,
				variant === 'simple' && styles.simple,
				className,
			)}
			disabled={isLoading || props.disabled}
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	);
}
