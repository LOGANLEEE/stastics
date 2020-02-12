import React from 'react';

import { Button, Grid } from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import Buttons from 'components/Buttons';

import Wrapper from './Wrapper';

function RightSideBarContainer(props) {
	const { width, isDayMode, MODE_CHANGER, length_of_processedList, OPEN_SITE_FROM_MIN_TO_MAX } = props;

	return (
		<Wrapper width={width} isDayMode={isDayMode}>
			<Grid
				className='buttonGrid'
				container
				direction='row'
				justify='space-around'
				alignItems='stretch'
				// key={processedList[index].id}
				// onClick={() => console.info(data[index].link)}
				// style={style}
			>
				<div className='child1'>
					<Button value={isDayMode} onClick={() => MODE_CHANGER(isDayMode)}>
						Theme
						{isDayMode ? <Icon.WbSunny /> : <Icon.NightsStay />}
					</Button>
				</div>
				<div className='child2'>
					<Buttons
						key={`ContentRenderer > Buttons`}
						OPEN_SITE_FROM_MIN_TO_MAX={OPEN_SITE_FROM_MIN_TO_MAX}
						length_of_processedList={length_of_processedList}
					/>
				</div>
			</Grid>
		</Wrapper>
	);
}

export default RightSideBarContainer;
