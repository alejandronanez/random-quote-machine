
import { post } from 'axios';

const API_URL = 'https://andruxnet-random-famous-quotes.p.mashape.com';
const API_KEY = 't6hmrRogVJmshkOdfxZEejHy8aKbp1tKD2rjsn1nuCUS3pIBbR';

export function getQuotes() {
	return post(API_URL, {}, {
		headers: {
			'X-Mashape-Key': API_KEY,
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept: 'application/json'
		}
	});
}
