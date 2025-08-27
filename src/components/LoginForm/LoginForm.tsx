'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import useAuthStore from '@/store/authStore';

import { LoginCredentials } from '@/types';

import styles from './LoginForm.module.scss';

interface FormErrors {
	username?: string;
	password?: string;
}

const LoginForm = () => {
	const [credentials, setCredentials] = useState<LoginCredentials>({
		username: '',
		password: '',
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const { login, isLoading, error, clearError } = useAuthStore();
	const router = useRouter();

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!credentials.username.trim()) {
			newErrors.username = 'Username is required';
		} else if (credentials.username.trim().length < 3) {
			newErrors.username = 'Username must be at least 3 characters';
		}

		if (!credentials.password.trim()) {
			newErrors.password = 'Password is required';
		} else if (credentials.password.trim().length < 3) {
			newErrors.password = 'Password must be at least 3 characters';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		clearError();

		if (!validateForm()) {
			return;
		}

		const success = await login({
			username: credentials.username.trim(),
			password: credentials.password.trim(),
		});

		if (success) {
			router.push('/');
		}
	};

	const handleInputChange = (field: keyof LoginCredentials, value: string) => {
		setCredentials((prev) => ({ ...prev, [field]: value }));
		// Clear field error when user starts typing
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: undefined }));
		}
		// Clear global error
		if (error) {
			clearError();
		}
	};

	return (
		<div className={styles.formContainer}>
			<form
				onSubmit={handleSubmit}
				className={styles.form}
			>
				<h1 className={styles.title}>Login</h1>

				{error && <div className={styles.globalError}>{error}</div>}

				<div className='formGroup'>
					<label
						htmlFor='username'
						className={styles.label}
					>
						Username
					</label>
					<input
						id='username'
						type='text'
						value={credentials.username}
						onChange={(e) => handleInputChange('username', e.target.value)}
						className={`formControl ${errors.username ? 'error' : ''}`}
						placeholder='Enter your username'
						disabled={isLoading}
					/>
					{errors.password && <div className='errorMessage'>{errors.password}</div>}
				</div>

				<button
					type='submit'
					className={`btn btnPrimary ${styles.submitBtn}`}
					disabled={isLoading}
				>
					{isLoading ? 'Logging in...' : 'Login'}
				</button>

				<div className={styles.hint}>
					<p>Use any username and password with at least 3 characters</p>
					<p className={styles.exampleCredentials}>
						Example: <strong>emilys</strong> / <strong>emilyspass</strong>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
