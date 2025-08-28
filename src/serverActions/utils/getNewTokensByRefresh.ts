'use server';

import { API_URL } from '@/config/constants';

interface Response {
	refreshToken: string;
	accessToken: string;
}

export async function getNewTokensByRefresh(refreshToken: string) {
	const response = await fetch(`${API_URL}/auth/refresh`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Cookie: `refreshToken=${refreshToken}`,
		},
		credentials: 'include',
	});

	if (!response.ok) {
		throw new Error('Failed to fetch new tokens');
	}

	const data: Response = await response.json();
	return data;
}
