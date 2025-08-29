'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button/Button';
import { Field } from '@/components/ui/Field/Field';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';

import { useAuthForm } from '@/hooks/useAuthForm';

import { SwitchAuth } from '../../components/ui/SwitchAuth/SwitchAuth';

import { EnumSign, LoginData, RegisterData } from '@/types/auth.types';

import styles from './Auth.module.scss';

export function Auth() {
	const engNamesRegExp = /^[a-zA-Z\s-]+$/;

	const [signType, setSignType] = useState<EnumSign>(EnumSign.LOGIN);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginData & RegisterData>({});

	const { isLoading, onSubmit } = useAuthForm(signType, reset);

	return (
		<div className={styles.wrapper}>
			<div className={styles.formContainer}>
				<SwitchAuth
					signType={signType}
					setSignType={setSignType}
				/>
				<form onSubmit={handleSubmit(onSubmit)}>
					{isLoading ? (
						<LoadingSpinner />
					) : (
						<>
							{signType === EnumSign.LOGIN && (
								<>
									<Field
										label='Username'
										type='text'
										registration={register('username', {
											required: 'Username is required!',
											minLength: {
												value: 3,
												message: 'Username must be at least 3 characters',
											},
										})}
										error={errors.username?.message}
										placeholder='Enter username:'
									/>
									<Field
										label='Password'
										type='password'
										registration={register('password', {
											required: 'Password is required!',
											minLength: {
												value: 3,
												message: 'Password must be at least 3 characters',
											},
										})}
										error={errors.password?.message}
										placeholder='Enter password:'
									/>
								</>
							)}
							{signType === EnumSign.REGISTER && (
								<>
									<Field
										label='First name'
										type='text'
										registration={register('firstName', {
											required: 'First name is required!',
											pattern: {
												value: engNamesRegExp,
												message: 'Enter correct first name',
											},
											minLength: {
												value: 3,
												message: 'First name must be at least 3 characters',
											},
										})}
										error={errors.firstName?.message}
										placeholder='Enter first name:'
									/>
									<Field
										label='Last name'
										type='text'
										registration={register('lastName', {
											required: 'Last name is required!',
											pattern: {
												value: engNamesRegExp,
												message: 'Enter correct sur name',
											},
											minLength: {
												value: 3,
												message: 'Last Name must be at least 3 characters',
											},
										})}
										error={errors.lastName?.message}
										placeholder='Enter last name:'
									/>
								</>
							)}
						</>
					)}
					<div className={styles.buttonWrapper}>
						<Button
							variant='accent'
							className={styles.submitButton}
							type='submit'
							isLoading={isLoading}
						>
							{signType}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
