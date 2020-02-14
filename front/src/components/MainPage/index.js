import React from 'react';
import Wrapper from './Wrapper';
import { Grid } from '@material-ui/core';

function MainPage() {
	return (
		<Wrapper>
			<Grid container direction='row' justify='center' alignItems='stretch'>
				<div>
					<div>정보</div>
					<div> 뉴스</div>
					<div>뭫 넣을까</div>
					<div>흐잉</div>
				</div>
			</Grid>
		</Wrapper>
	);
}

export default MainPage;
