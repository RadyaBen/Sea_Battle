import * as React from 'react';

import { HeaderWithCounter } from './components/HeaderWithCounter';
import { Battlefield } from './components/Battlefield/Battlefield';
import { ResetButton } from './components/ResetButton';
import { useGameState } from './state/useGameState';

function App() {
	const { turn, reset, matrix, fire, won } = useGameState();

	if (won) {
		alert('You are win!');
		reset();
	}

	return (
		<div>
			<HeaderWithCounter turn={turn} />
			<Battlefield matrix={matrix} onFire={fire} />
			<ResetButton reset={reset} />
		</div>
	);
}

export default App;