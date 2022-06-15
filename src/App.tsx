import * as React from 'react';

import { HeaderWithCounter } from './components/HeaderWithCounter';
import { Battlefield } from './components/Battlefield';
import { ResetButton } from './components/ResetButton';
import { useGameState } from './state/useGameState';

function App() {
	const { turn, reset, matrix } = useGameState();
	const onFire = (y: number, x: number) => console.log(y, x);
	
	return (
		<div>
			<HeaderWithCounter turn={turn} />
			<Battlefield matrix={matrix} onFire={onFire}/>
			<ResetButton reset={reset} />
		</div>
	);
}

export default App;