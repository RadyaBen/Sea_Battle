import * as React from 'react';

type BattlefieldProps = {
	matrix: number[][];
}

export const Battlefield = ({ matrix }: BattlefieldProps) => {
	return (
		<div>
			{matrix.map((value, i) => (
				<div key={i}>{value}</div>
			))}
		</div>
	);
};