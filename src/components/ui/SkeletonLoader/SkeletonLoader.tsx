import type { CSSProperties } from 'react';

import styles from './SkeletonLoader.module.scss';

interface Props {
	count?: number;
	style?: CSSProperties;
	className?: string;
}

export function SkeletonLoader({ count = 1, className = '', style }: Props) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className={`${styles.skeleton} ${className}`}
					style={style}
				/>
			))}
		</>
	);
}
