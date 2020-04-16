import test, {ExecutionContext} from 'ava';
import {ReadonlyDeep} from 'type-fest';
import {helloWorld} from '.';

test('hello world', (t: ReadonlyDeep<ExecutionContext>) => {
	t.is(helloWorld(), 'Hello, world.', 'says hello world when subject is not provided');
	t.is(helloWorld('TypeScript'), 'Hello, TypeScript.', 'uses subject param when provided');
});
