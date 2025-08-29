export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken',
}

export enum EnumSign {
	'LOGIN' = 'login',
	'REGISTER' = 'register',
}

export interface LoginData {
	username: string;
	password: string;
}

export interface RegisterData {
	firstName: string;
	lastName: string;
}
