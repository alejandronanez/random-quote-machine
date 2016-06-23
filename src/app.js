
import 'styles/style.css';
import { getQuotes } from 'api/api';

const quoteElement = document.querySelector('.js-quote');
const authorElement = document.querySelector('.js-author');
const newQuoteElement = document.querySelector('.js-new-quote');
const tweetElement = document.querySelector('.js-share');

export function getTweet(message, author) {
	return `http://twitter.com/home/?status=${message} - ${author}`;
}

function getNewQuotes() {
	getQuotes()
		.then(({ data: { author, quote }, status }) => {
			if (status === 200) {
				quoteElement.textContent = quote;
				authorElement.textContent = `- ${author}`;
				tweetElement.href = getTweet(quote, author);
			} else {
				quoteElement.textContent = 'Something went wrong =[';
				authorElement.textContent = '';
			}
		})
		.catch(() => {
			quoteElement.textContent = 'Something went wrong';
			authorElement.textContent = '';
		});
}

getNewQuotes();

newQuoteElement.addEventListener('click', (evt) => {
	evt.preventDefault();
	evt.stopPropagation();

	getNewQuotes();
});
