import { useState } from 'react';

import { createArray, createWarShip } from '../utils';

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
		emptyBattlefield[y][x] = 1;
	});

	return emptyBattlefield;
};

export const useGameState = () => {
	const [gameState, setGameState] = useState({
		matrix: createBattleField(),
		turn: 0
	});

	const reset = () => {
		setGameState({
			matrix: createBattleField(),
			turn: 0,
		});
	};

	const { turn, matrix } = gameState;

	return { turn, reset, matrix };
};