import { expect, test } from 'vitest';

import { helloWorld } from './index.js';

test('says hello world when subject is not provided', () => {
	expect(helloWorld()).toBe('Hello, world.');
});

test('uses subject param when provided', () => {
	expect(helloWorld('TypeScript')).toBe('Hello, TypeScript.');
});
