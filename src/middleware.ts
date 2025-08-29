import type { NextRequest, NextResponse } from 'next/server';

import { PublicPages } from './config/publicPages.config';
import { getNewTokensByRefresh } from './serverActions/middlewares/utils/getNewTokensByRefresh';
import { nextRedirect } from './serverActions/middlewares/utils/nextRedirect';
import { EnumTokens } from './types/auth.types';

export async function middleware(request: NextRequest, response: NextResponse) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
	let accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;

	if (!refreshToken) {
		request.cookies.delete(EnumTokens.ACCESS_TOKEN);
		return null;
	}

	if (!accessToken) {
		try {
			const data = await getNewTokensByRefresh(refreshToken);
			accessToken = data.accessToken;
		} catch (error) {
			if (error instanceof Error) {
				if (error.message === 'Invalid token') {
					console.log('Invalid token');
					request.cookies.delete(EnumTokens.ACCESS_TOKEN);
					return null;
				}
			}
			return null;
		}
	}

	return nextRedirect(PublicPages.HOME, request.url);
}

export const config = {
	matcher: ['/auth'],
};
