'use client';

import { useMutation } from '@tanstack/react-query';

import { Button } from '@/components/ui/Button/Button';
import { LinkButton } from '@/components/ui/Button/LinkButton';

import { useAuthStore } from '@/providers/authProvider';

import { authService } from '@/services/auth.service';

import styles from './HeaderProfile.module.scss';

export default function HeaderProfile() {
	const { user, isLoggedIn } = useAuthStore((store) => store);

	const { mutate, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
	});

	return (
		<nav className={styles.nav}>
			{isLoggedIn && user ? (
				<div className={styles.userInfo}>
					<span className={styles.userName}>
						{user.firstName} {user.lastName}
					</span>
					<Button onClick={() => mutate()}>{isPending ? 'Loading' : 'Logout'}</Button>
				</div>
			) : (
				<LinkButton href='/auth'>Login</LinkButton>
			)}
		</nav>
	);
}
