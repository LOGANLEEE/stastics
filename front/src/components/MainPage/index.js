import React from 'react';
import Wrapper from './Wrapper';
import { Grid } from '@material-ui/core';

function MainPage() {
	return (
		<Wrapper>
			<Grid container direction='column' justify='center' alignItems='stretch'>
				<div>SECTION 1</div>
				<div>SECTION 2</div>
				<div>SECTION 3</div>
				<div>SECTION 4</div>
			</Grid>
		</Wrapper>
	);
}

export default MainPage;
