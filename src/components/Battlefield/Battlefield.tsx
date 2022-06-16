import * as React from 'react';

import './Battlefield.scss';

type CellProps = {
	value: number,
	cellClickHandler: (y: number, x: number) => void;
	x: number;
	y: number;
}

const Cell = ({ cellClickHandler, value, x, y }: CellProps) => {
	return (
		<button className='cell' onClick={() => cellClickHandler(y, x)}>
			{value}
		</button>
	);
};

type BattlefieldProps = {
	matrix: number[][];
	onFire: (x: number, y: number) => void;
};

export const Battlefield = ({ matrix, onFire }: BattlefieldProps) => {
	console.log(matrix);

	return (
		<div>
			{matrix.map((line, lineNumber) => (
				<div className='line' key={lineNumber}>
					{line.map((value, i) => (
						<Cell
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