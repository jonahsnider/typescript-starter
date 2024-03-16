import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// biome-ignore lint/style/noDefaultExport: This must be a default export
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
