'use client';

import { useEffect } from 'react';

import Footer from '@/components/Layout/Content/Footer/Footer';

import '@/config/_reset.scss';

import Header from './Header/Header';
import { authService } from '@/services/auth.service';

export default function Content({ children }: { children: React.ReactNode }) {
	const serverYear = new Date().getFullYear();

	useEffect(() => {
		authService.initializeAuth();
	}, []);

	return (
		<>
			<Header />
			<main className='mainContent'>{children}</main>
			<Footer year={serverYear} />
		</>
	);
}
