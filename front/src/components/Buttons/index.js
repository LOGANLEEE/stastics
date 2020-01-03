import React from 'react';
import Wrapper from './Wrapper';
import { Button } from '@material-ui/core';

export default function Buttons(props) {
	function onClick(min, max) {
		props.OPEN_SITE_FROM_MIN_TO_MAX(min, max);
	}

	function buttonGenerator(howManyBtns) {
		const btns = [];
		for (let i = 1; i < howManyBtns + 1; i++) {
			const min = (100 / howManyBtns) * (i - 1) + 1;
			const max = (100 / howManyBtns) * i;
			btns.push(
				<Button key={i} onClick={() => onClick(min, max)} variant='outlined'>
					{max}
				</Button>,
			);
		}
		return btns;
	}

	return <Wrapper>{buttonGenerator(10)}</Wrapper>;
}
