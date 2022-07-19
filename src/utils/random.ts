export function random(min: number, max: number) {
	// Return an integer random number between min (included) and max (not included)
	return Math.floor(Math.random() * (max - min) + min);
};