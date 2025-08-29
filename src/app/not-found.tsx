import { LinkButton } from '@/components/ui/Button/LinkButton';

import styles from './not-found.module.scss';

export default function NotFound() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>404</h1>
			<h2 className={styles.subtitle}>Page Not Found</h2>
			<p className={styles.text}>Sorry, we&nbsp;couldn&rsquo;t find the page you&rsquo;re looking for.</p>
			<LinkButton href='/'>Go Home</LinkButton>
		</div>
	);
}
