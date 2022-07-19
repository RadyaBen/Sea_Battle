import { useState } from 'react';

import { createArray, createWarShip } from '../utils';
import {
	WATER,
	SHIP,
	CHECKED_WATER,
	CHECKED_SHIP
} from '../constants/cellState';

const MAX_MATRIX_LENGTH = 10;

// Create an array of 10 elements in which the values ​​will be in the form of a matrix
const createEmptyBattlefield = () =>
	createArray(MAX_MATRIX_LENGTH, () => createArray(MAX_MATRIX_LENGTH, () => 0)
	);

const createBattleField = () => {
	const emptyBattlefield = createEmptyBattlefield();
	const newWarShip = createWarShip(4, MAX_MATRIX_LENGTH);

	// Add a ship to the matrix
	newWarShip.forEach(({ x, y }) => {
		emptyBattlefield[y][x] = SHIP;
	});

	return emptyBattlefield;
};

export const useGameState = () => {
	const [gameState, setGameState] = useState({
		matrix: createBattleField(),
		turn: 0,
		won: false
	});

	const reset = () => {
		setGameState({
			matrix: createBattleField(),
			turn: 0,
			won: false
		});
	};

	const fire = (y: number, x: number) => {
		const cell = gameState.matrix[y][x];

		// Check if the same cell is clicked
		if (cell === CHECKED_WATER || cell === CHECKED_SHIP) {
			return;
		}

		const newState = cell === WATER ? CHECKED_WATER : CHECKED_SHIP;
		gameState.matrix[y][x] = newState;
		
		// Check if there is a ship in the matrix
		const won = gameState.matrix.every(line => line.every((x) => x !== SHIP));

		setGameState({ ...gameState, turn: turn + 1, won });
	};

	const { turn, matrix, won } = gameState;

	return { 
		turn, 
		reset, 
		matrix,
		fire, 
		won 
	};
};