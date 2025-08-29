import cn from 'clsx';
import { RouteType } from 'next/dist/lib/load-custom-routes';
import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

import { ButtonVariants } from './Button';

import styles from './Button.module.scss';

type TLink = LinkProps<RouteType> & AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends TLink {
	variant?: ButtonVariants;
	isLoading?: boolean;
}

export function LinkButton({
	children,
	variant = 'primary',
	isLoading,
	className,
	...props
}: PropsWithChildren<Props>) {
	return (
		<Link
			className={cn(
				styles.button,
				variant === 'primary' && styles.primary,
				variant === 'secondary' && styles.secondary,
				variant === 'accent' && styles.accent,
				className,
			)}
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</Link>
	);
}
