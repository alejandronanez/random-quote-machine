
export function getTweet(message, author) {
	let resultMessage = message;
	const totalLength = author.length + message.length + 3;

	if (totalLength > 140) {
		resultMessage = `${message.slice(0, -(author.length + 6))}...`;
	}

	return `${resultMessage} - ${author}`;
}
