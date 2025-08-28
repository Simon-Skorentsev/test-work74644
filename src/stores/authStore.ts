import Cookies from 'js-cookie';
import { createStore } from 'zustand/vanilla';

import { EnumTokens } from '@/types/auth.types';
import { User } from '@/types/user.types';

interface AuthState {
	user: User | null;
	isLoggedIn: boolean;
	accessToken: string | null;
}

export type AuthActions = {
	setAuthData: ({ user, accessToken }: { user: User; accessToken: string }) => void;
	clearAuthData: () => void;
};

export type AuthStore = AuthState & AuthActions;

const defaultInitState: AuthState = {
	user: null,
	isLoggedIn: !!Cookies.get(EnumTokens.ACCESS_TOKEN),
	accessToken: Cookies.get(EnumTokens.ACCESS_TOKEN) || null,
};

export const createAuthStore = (initState: AuthState = defaultInitState) => {
	return createStore<AuthStore>()((set) => ({
		...initState,
		setAuthData: ({ accessToken, user }) => set(() => ({ user, accessToken, isLoggedIn: true })),
		clearAuthData: () => set(() => ({ user: null, isLoggedIn: false, accessToken: null })),
	}));
};

export const authStore = createAuthStore();
