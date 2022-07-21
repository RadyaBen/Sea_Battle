import { useEffect } from 'react';

import { HeaderWithCounter } from '../HeaderWithCounter';
import { Battlefield } from '../Battlefield';
import { ResetButton } from '../ResetButton';
import { useGameState } from '../../state/useGameState';

import './App.scss';

const App = () => {
	const { turn, reset, matrix, fire, won } = useGameState();

	useEffect(() => {
		const resetGameState = reset;

		if (turn === 30 && !won) {
			alert('Unfortunately you lost 😥');
			const isConfirmed = window.confirm("But don't give up, you can still win! Do you want to play again?");

			if (isConfirmed) {
				resetGameState();
			} else {
				alert('You can try to win later 😉');
				resetGameState();
			}
		}
	}, [turn, reset, won]);

	if (won) {
		alert('You won! Congratulations 😎');
		reset();
	}

	return (
		<div className='container'>
			<div className='content'>
				<HeaderWithCounter turn={turn} />
				<Battlefield matrix={matrix} onFire={fire} />
				<ResetButton reset={reset} />
			</div>
		</div>
	);
};

export { App };