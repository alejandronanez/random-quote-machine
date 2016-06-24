
import 'styles/style.css';
import { getQuotes } from 'api/api';
import { getTweet } from 'helpers/helpers';
import {
	ERROR_TEXT,
	ERROR_AUTHOR,
	TWEET_URL
} from 'constants/constants';

function getNewQuotes() {

	const quoteElement = document.querySelector('.js-quote');
	const authorElement = document.querySelector('.js-author');
	const tweetElement = document.querySelector('.js-share');

	getQuotes()
		.then(({ data: { author, quote }, status }) => {
			if (status === 200) {
				quoteElement.textContent = quote;
				authorElement.textContent = `- ${author}`;
				tweetElement.href = `${TWEET_URL}${getTweet(quote, author)}`;
			} else {
				quoteElement.textContent = ERROR_TEXT;
				authorElement.textContent = ERROR_AUTHOR;
			}
		})
		.catch(() => {
			quoteElement.textContent = ERROR_TEXT;
			authorElement.textContent = ERROR_AUTHOR;
		});
}

const newQuoteElement = document.querySelector('.js-new-quote');

newQuoteElement.addEventListener('click', (evt) => {
	evt.preventDefault();
	evt.stopPropagation();

	getNewQuotes();
});

getNewQuotes();

