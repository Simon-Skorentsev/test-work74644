'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import LoginForm from '@/components/LoginForm/LoginForm';

import useAuthStore from '@/store/authStore';

export default function LoginPage() {
	const { isAuthenticated, checkAuth } = useAuthStore();
	const router = useRouter();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	useEffect(() => {
		if (isAuthenticated) {
			router.replace('/');
		}
	}, [isAuthenticated, router]);

	// Don't render login form if already authenticated
	if (isAuthenticated) {
		return null;
	}

	return (
		<div className='container'>
			<LoginForm />
		</div>
	);
}
