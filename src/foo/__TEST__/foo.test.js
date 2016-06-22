import test from 'ava';
import { foo } from '../foo';

test(t => {
	const result = foo(1, 1);
	t.is(result, 2);
});
