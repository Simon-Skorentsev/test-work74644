import type { NextRequest, NextResponse } from 'next/server';

import { PublicPages } from './config/publicPages.config';
import { protectAuthPages } from './serverActions/middlewares/protectAuthPages';

export async function middleware(request: NextRequest, response: NextResponse) {
	const url = new URL(request.url);
	const pathname = url.pathname;

	if (pathname.includes(PublicPages.AUTH)) {
		return protectAuthPages(request);
	}
}

export const config = {
	matcher: ['/auth'],
};
