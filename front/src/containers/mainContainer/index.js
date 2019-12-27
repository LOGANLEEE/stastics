import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Wrapper from './Wrapper';
import 'react-virtualized/styles.css'; // only needs to be imported once

import Header from '../HeaderContainer';
import Footer from '../FooterContainer';
import LeftSideBar from '../LeftSideBarContainer';
import RightSideBar from '../RightSideBarContainer';
import ListView from '../ListContainer';
import * as init from 'init';

function Main(props) {
	useEffect(() => {
		init.start();
		document.title = `${props.title}`;
	});

	window.ifeellove = 'is it worked?';

	return (
		<Wrapper>
			<Grid container direction='column' justify='center' alignItems='stretch'>
				<Header {...props} />
				<Grid container direction='row' justify='center' alignItems='stretch'>
					<LeftSideBar width={'15%'} />
					<ListView width={'70%'} {...props} />
					<RightSideBar width={'15%'} />
				</Grid>
				<Footer />
			</Grid>
		</Wrapper>
	);
}

const mapStateToProps = (state, ownProps) => ({
	tempPosts: state.initial.tempPosts,
	listTargetCount: state.main.listTargetCount,
	currentFirstTabId: state.ui.currentFirstTabId,
	currentSecondTabId: state.ui.currentSecondTabId,
});

export default connect(mapStateToProps, null)(Main);
