export function createArray<T>(length: number, callback: () => T) {
	// Create an array of a given length and fill it with the passed data
	return [...new Array(length)].map(callback); 
};