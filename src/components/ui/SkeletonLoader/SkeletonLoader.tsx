import cn from 'clsx';

import styles from './SkeletonLoader.module.scss';

interface Props {
	count?: number;
	className?: string;
}
export function SkeletonLoader({ count = 1, className = '' }: Props) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className={cn(styles.skeleton, className)}
				/>
			))}
		</>
	);
}
