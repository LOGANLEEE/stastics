import React from 'react';
import Wrapper from './Wrapper';
import { Button } from '@material-ui/core';

export default function Buttons(props) {
	const { OPEN_SITE_FROM_MIN_TO_MAX, length_of_processedList } = props;

	function buttonGenerator() {
		const btns = [];
		const increaseGap = 10;
		for (let i = 1; i < length_of_processedList + 1; i += increaseGap) {
			const min = i;
			const max = i + increaseGap - 1;
			btns.push(
				<Button key={i} onClick={() => OPEN_SITE_FROM_MIN_TO_MAX(min, max)} variant='outlined'>
					{max}
				</Button>,
			);
		}
		return btns;
	}

	return <Wrapper>{buttonGenerator()}</Wrapper>;
}
