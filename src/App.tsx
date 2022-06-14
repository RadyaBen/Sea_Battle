import * as React from 'react';

import { HeaderWithCounter } from './components/HeaderWithCounter';
import { Battlefield } from './components/Battlefield';
import { ResetButton } from './components/ResetButton';
import { useGameState } from './state/useGameState';

function App() {
	const { turn, reset, matrix } = useGameState();

	return (
		<div>
			<HeaderWithCounter turn={turn} />
			<Battlefield matrix={matrix} />
			<ResetButton reset={reset} />
		</div>
	);
}

export default App;