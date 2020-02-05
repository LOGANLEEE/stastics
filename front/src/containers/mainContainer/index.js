import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'react-virtualized/styles.css'; // only needs to be imported once
import FooterContainer from '../FooterContainer';
import HeaderContainer from '../HeaderContainer';
import LeftSideBarContainer from '../LeftSideBarContainer';
import ListContainer from '../ListContainer';
import RightSideBarContainer from '../RightSideBarContainer';
import Wrapper from './Wrapper';

function Main(props) {
	useEffect(() => {
		document.title = `${props.title}`;
	});

	window.ifeellove = 'is it worked?';

	return (
		<Wrapper>
			<Grid container direction='column' justify='center' alignItems='stretch'>
				<HeaderContainer {...props} />
				<Grid container direction='row' justify='center' alignItems='stretch'>
					<LeftSideBarContainer width={'15%'} />
					<ListContainer width={'70%'} {...props} />
					<RightSideBarContainer width={'15%'} />
				</Grid>
				<FooterContainer />
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
