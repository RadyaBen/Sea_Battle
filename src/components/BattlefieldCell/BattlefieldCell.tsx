import {
	WATER,
	SHIP,
	CHECKED_WATER,
	CHECKED_SHIP
} from '../../constants/cellState';

import './BattlefieldCell.scss';

type CellProps = {
	value: number,
	cellClickHandler: (y: number, x: number) => void;
	x: number;
	y: number;
};

const cellStateMap: { [key: string]: string } = {
	[WATER]: '',
	[SHIP]: '',
	[CHECKED_WATER]: '🌊',
	[CHECKED_SHIP]: '🔥'
};

const BattlefieldCell = ({ cellClickHandler, value, x, y }: CellProps) => {
	return (
		<button className='cell' onClick={() => cellClickHandler(y, x)}>
			{cellStateMap[value]}
		</button>
	);
};

export { BattlefieldCell };