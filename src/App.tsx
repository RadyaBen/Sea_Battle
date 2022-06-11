import * as React from 'react';

import { HeaderWithCounter } from './components/HeaderWithCounter';
import { Battlefield } from './components/Battlefield';

function App() {
	return (
		<div>
			<HeaderWithCounter turn={0} />
			<Battlefield />
		</div>
	);
}

export default App;