import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		root: dirname(fileURLToPath(import.meta.url)),
		coverage: {
			include: ['src/**/*.ts'],
			thresholds: {
				100: true,
			},
		},
	},
});
