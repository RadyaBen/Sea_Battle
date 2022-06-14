export const useGameState = () => {
	const turn = 0;
	const reset = () => console.log('reset');
	
	return { turn, reset };
};