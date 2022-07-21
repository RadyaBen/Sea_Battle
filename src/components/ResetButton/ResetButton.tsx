import './ResetButton.scss';

const ResetButton = ({ reset }: { reset: () => void }) => {
	return (
		<button
			className='reset-button'
			type='button'
			onClick={reset}
		>
			Reset
		</button>
	);
};

export { ResetButton };