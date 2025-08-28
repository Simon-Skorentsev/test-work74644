import { FlatCompat } from '@eslint/eslintrc';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		plugins: {
			prettier: prettierPlugin,
			'unused-imports': unusedImportsPlugin,
		},
		rules: {
			'prettier/prettier': 'error',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'prefer-const': 'error',
			'no-var': 'error',

			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',

			'@typescript-eslint/no-unused-vars': 'off', // Disable the standard rule as we use unused-imports instead
			'@typescript-eslint/no-non-null-assertion': 'warn',

			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
		ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
	},
	prettierConfig,
];

export default eslintConfig;
