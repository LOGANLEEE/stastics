import React from 'react';
import Wrapper from './Wrapper';
import { Button, Grid } from '@material-ui/core';
import * as Icon from '@material-ui/icons';

function RightSideBarContainer(props) {
	const { width, isDayMode, MODE_CHANGER } = props;

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
						{isDayMode ? <Icon.WbSunny /> : <Icon.NightsStay />}
					</Button>
				</div>
			</Grid>
		</Wrapper>
	);
}

export default RightSideBarContainer;
