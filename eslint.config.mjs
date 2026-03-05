// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier';

export default withNuxt(
	{
		rules: {
			// Vue-specific rules
			'vue/max-attributes-per-line': 'off', // Let Prettier handle this
			'vue/html-indent': 'off', // Let Prettier handle this
			'vue/html-closing-bracket-newline': 'off', // Let Prettier handle this
			'vue/singleline-html-element-content-newline': 'off', // Let Prettier handle this
			'vue/multiline-html-element-content-newline': 'off', // Let Prettier handle this
			'vue/html-self-closing': 'off', // Let Prettier handle this
			'vue/attributes-order': 'warn', // Keep as warning for better organization

			// v-html is needed for SVG icons - disable the warning for now
			// In production, you should sanitize the HTML content
			'vue/no-v-html': 'off',

			// TypeScript rules
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],

			// General rules
			'no-console':
				process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger':
				process.env.NODE_ENV === 'production' ? 'error' : 'off',
		},
	},
	eslintConfigPrettier,
);
