export function createArray<T>(length: number, callback: (i: number) => T) {
	// Create an array of a given length and fill it with the passed data
	return [...new Array(length)].map((_, i) => callback(i));
};