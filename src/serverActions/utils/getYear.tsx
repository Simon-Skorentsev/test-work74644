export const getYear = async () => {
	'use server';

	return new Date().getFullYear();
};
