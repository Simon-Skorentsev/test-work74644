'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { AuthStoreProvider } from './authProvider';

export default function GlobalProviders({ children }: { children: ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 1,
						refetchOnWindowFocus: false,
					},
					mutations: {
						retry: 1,
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<AuthStoreProvider>
				{children}
				<Toaster
					toastOptions={{
						style: {
							backgroundColor: '#202937',
							color: 'white',
						},
					}}
				/>
			</AuthStoreProvider>
		</QueryClientProvider>
	);
}
