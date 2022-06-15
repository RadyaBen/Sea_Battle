import { createArray } from '../utils/matrixArray';

const MAX_MATRIX_LENGTH = 10;

const createEmptyBattlefield = () =>
	createArray(MAX_MATRIX_LENGTH, () => createArray(MAX_MATRIX_LENGTH, () => 0)
	);

export const useGameState = () => {
	const turn = 0;
	const reset = () => console.log('reset');
	const matrix = createEmptyBattlefield();

	return { turn, reset, matrix };
};