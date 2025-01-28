export const formatCurrency = (amount: number | null) => {
	const value = amount || 0;
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(value);
};

export const formatQuantity = (
	quantity: number | undefined,
	noun: string
): string => {
	return quantity === 1 ? `${quantity} ${noun}` : `${quantity} ${noun}s`;
};

export const isLongSentence = (
	sentenceLength: number,
	sentence: string
): string => {
	return sentence.length > sentenceLength
		? `${sentence.substring(0, sentenceLength)}...`
		: `${sentence}`;
};

// onlyMonth = get year and month
export const formatDate = (date: Date, onlyMonth?: boolean) => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		timeZone: 'Asia/Tokyo',
	};
	if (!onlyMonth) {
		options.day = 'numeric';
		options.weekday = 'short';
	}
	return new Intl.DateTimeFormat('en-US', options).format(date);
};
