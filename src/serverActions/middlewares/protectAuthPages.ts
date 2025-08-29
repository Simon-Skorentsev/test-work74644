import { type NextRequest, NextResponse } from 'next/server';

import { PublicPages } from '@/config/publicPages.config';

import { getTokensFromRequest } from './utils/get-tokens-from-request';
import { jwtVerify } from './utils/jwt-verify';
import { nextRedirect } from './utils/nextRedirect';

export async function protectAuthPages(request: NextRequest) {
	const tokens = await getTokensFromRequest(request);
	if (!tokens) return NextResponse.next();

	const verifiedData = await jwtVerify(tokens.accessToken);
	if (!verifiedData) return NextResponse.next();

	return nextRedirect(PublicPages.HOME, request.url);
}
