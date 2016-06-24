
import test from 'ava';
import { getTweet } from '../helpers';

test('ok when content is less than 140 chars', t => {
	const quote = 'A short tweet';
	const author = 'author';
	const expectedResult = `${quote} - ${author}`;

	const result = getTweet(quote, author);

	t.is(result, expectedResult);
});

test('returns the truncated string', t => {
	const quote = 'A'.repeat(140);
	const truncatedString = 'A'.repeat(128);
	const author = 'author';
	const expectedResult = `${truncatedString}... - ${author}`;

	const result = getTweet(quote, author);

	t.is(result, expectedResult);
});
