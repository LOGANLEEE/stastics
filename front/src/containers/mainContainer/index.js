import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'react-virtualized/styles.css';
import PropTypes from 'prop-types';
import FooterContainer from '../FooterContainer';
import HeaderContainer from '../HeaderContainer';
import LeftSideBarContainer from '../LeftSideBarContainer';
import BodyContainer from '../BodyContainer';
import RightSideBarContainer from '../RightSideBarContainer';
import Wrapper from './Wrapper';
import { MODE_CHANGER } from 'actions';
import { orderStandard } from 'internal_constants';

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
					<LeftSideBarContainer isDayMode={props.isDayMode} width={'15%'} />
					<BodyContainer width={'70%'} {...props} />
					<RightSideBarContainer
						MODE_CHANGER={props.MODE_CHANGER}
						isDayMode={props.isDayMode}
						width={'15%'}
					/>
				</Grid>
				<FooterContainer isDayMode={props.isDayMode} />
			</Grid>
		</Wrapper>
	);
}

const mapStateToProps = (state, ownProps) => ({
	//initial
	preProcessedList: state.initial.preProcessedList,
	sortedListByCreateAt_ASC: state.initial.sortedListByCreateAt_ASC,
	sortedListByHitCount_ASC: state.initial.sortedListByHitCount_ASC,
	sortedListByRegisteredAt_ASC: state.initial.sortedListByRegisteredAt_ASC,
	sortedListByCreateAt_DESC: state.initial.sortedListByCreateAt_DESC,
	sortedListByHitCount_DESC: state.initial.sortedListByHitCount_DESC,
	sortedListByRegisteredAt_DESC: state.initial.sortedListByRegisteredAt_DESC,

	//main
	listTargetCount: state.main.listTargetCount,

	//ui
	currentFirstTabId: state.ui.currentFirstTabId,
	currentSecondTabId: state.ui.currentSecondTabId,
	isDayMode: state.ui.isDayMode,

	//list_view
	isAsc: state.list_view.isAsc,
	orderStandard: state.list_view.orderStandard,
});

Main.propTypes = {
	//initial
	preProcessedList: PropTypes.array,
	sortedListByCreateAt_ASC: PropTypes.array,
	sortedListByHitCount_ASC: PropTypes.array,
	sortedListByRegisteredAt_ASC: PropTypes.array,
	sortedListByCreateAt_DESC: PropTypes.array,
	sortedListByHitCount_DESC: PropTypes.array,
	sortedListByRegisteredAt_DESC: PropTypes.array,

	//main
	listTargetCount: PropTypes.number,

	//ui
	currentFirstTabId: PropTypes.number,
	currentSecondTabId: PropTypes.string,
	isDayMode: PropTypes.bool,
	MODE_CHANGER: PropTypes.func,

	//list_view
	isAsc: PropTypes.bool,
	orderStandard: PropTypes.string,
};
Main.defaultProps = {
	// initial
	preProcessedList: [],
	sortedListByCreateAt_ASC: [],
	sortedListByHitCount_ASC: [],
	sortedListByRegisteredAt_ASC: [],
	sortedListByCreateAt_DESC: [],
	sortedListByHitCount_DESC: [],
	sortedListByRegisteredAt_DESC: [],

	//main
	listTargetCount: 0,

	//ui
	currentFirstTabId: 0,
	currentSecondTabId: 0,
	isDayMode: true,

	//list_view
	isAsc: true,
	orderStandard: orderStandard.createdAt,
};

const mapDispatchToProps = {
	MODE_CHANGER,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
