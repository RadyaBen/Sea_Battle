import { BattlefieldCell } from '../BattlefieldCell';

import './Battlefield.scss';

type BattlefieldProps = {
	matrix: number[][];
	onFire: (x: number, y: number) => void;
};

const Battlefield = ({ matrix, onFire }: BattlefieldProps) => {
	return (
		<div>
			{matrix.map((line, lineNumber) => (
				<div className='line' key={lineNumber}>
					{line.map((value, i) => (
						<BattlefieldCell
							key={`${lineNumber}${i}`}
							value={value}
							y={lineNumber}
							x={i}
							cellClickHandler={onFire}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export { Battlefield };