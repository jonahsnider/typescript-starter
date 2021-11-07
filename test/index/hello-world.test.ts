import test from 'ava';
import {helloWorld} from '../../src/index.js';

test('says hello world when subject is not provided', t => {
	t.is(helloWorld(), 'Hello, world.');
});

test('uses subject param when provided', t => {
	t.is(helloWorld('TypeScript'), 'Hello, TypeScript.');
});
