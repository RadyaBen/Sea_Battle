import { HeaderWithCounter } from '../HeaderWithCounter';
import { Battlefield } from '../Battlefield';
import { ResetButton } from '../ResetButton';
import { useGameState } from '../../state/useGameState';

import './App.scss';

const App = () => {
	const { turn, reset, matrix, fire, won } = useGameState();

	if (won) {
		alert('You won! Congratulations :)');
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