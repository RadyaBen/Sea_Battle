import { createArray, random } from '../utils';

const createHorizontalWarShip = (length: number, maxSize: number) => {
	// Maximum allowed horizontal position
	const maxX = maxSize - length;
	// Since a ship is horizontal, then maxY will be equal to maxSize
	const maxY = maxSize;

	// Create random points from where a ship will be built 
	const headX = random(0, maxX);
	const headY = random(0, maxY);

	// Calculate a ship coordinates on the field 
	return createArray(length, (i) => {
		// y must alaways be constant, and x must always increase by one
		return { y: headY, x: headX + i };
	});
};

const createVerticalWarShip = (length: number, maxSize: number) => {
	// Since a ship is vertical, then maxX will be equal to maxSize
	const maxX = maxSize;
	// Maximum allowed vertical position
	const maxY = maxSize - length;

	// Create random points from where a ship will be built 	
	const headX = random(0, maxX);
	const headY = random(0, maxY);

	// Calculate a ship coordinates on the field 
	return createArray(length, (i) => {
		// y must always increase by one, and x must alaways be constant
		return { y: headY + i, x: headX };
	});
};

type Point = {
	x: number, y: number
};

export const createWarShip = (shipLength: number, maxSize: number): Point[] => {
	const position = random(0, 2) % 2 === 0 ? 'horizontal' : 'vertical';
	return position === 'horizontal'
		? createHorizontalWarShip(shipLength, maxSize)
		: createVerticalWarShip(shipLength, maxSize);
};