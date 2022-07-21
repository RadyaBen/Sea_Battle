import './HeaderWithCounter.scss';

const HeaderWithCounter = ({ turn }: { turn: number }) => {
	return (
		<>
			<h2 className='header'>You clicked {turn} times</h2>
			<p className='text'>Shink the ship in 30 attempts to win</p>
		</>
	);
};

export { HeaderWithCounter };