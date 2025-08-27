export const validateUsername = (username: string): string | null => {
	const trimmed = username.trim();

	if (!trimmed) {
		return 'Username is required';
	}

	if (trimmed.length < 3) {
		return 'Username must be at least 3 characters';
	}

	return null;
};

export const validatePassword = (password: string): string | null => {
	const trimmed = password.trim();

	if (!trimmed) {
		return 'Password is required';
	}

	if (trimmed.length < 3) {
		return 'Password must be at least 3 characters';
	}

	return null;
};

export const validateLoginForm = (username: string, password: string) => {
	return {
		username: validateUsername(username),
		password: validatePassword(password),
	};
};
