const tsEslint = require('typescript-eslint');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
	{
		rules: {
			semi: 'error',
			'prefer-const': 'error',
			curly: 'error',
			'no-process-env': 'error',
			'no-restricted-syntax': [
				'error',
				{
					selector: '[object.type=MetaProperty][property.name=env]',
					message: 'Use instead import { env } from "lib/env"',
				},
			],
			'no-console': 'off',
		},
		plugins: {
			tsEslint,
			tsPlugin,
		},
		ignores: [
			'node_modules',
			'tsconfig.tsbuildinfo',
			'dist',
			'.config/*',
			'**/*.config.js',
			'**/*.config.ts',
			'vite-env.d.ts',
		],
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
		},
	},
];
