import * as React from 'react';

import { HeaderWithCounter } from './components/HeaderWithCounter';
import { Battlefield } from './components/Battlefield';
import { ResetButton } from './components/ResetButton';

function App() {
	const reset = () => console.log('reset');
	
	return (
		<div>
			<HeaderWithCounter turn={0} />
			<Battlefield />
			<ResetButton reset={reset}/>
		</div>
	);
}

export default App;