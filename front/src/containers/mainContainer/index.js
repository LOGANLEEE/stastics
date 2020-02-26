import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import 'react-virtualized/styles.css';

import {
	LIST_ORDER_CHANGER,
	MODE_CHANGER,
	OPEN_SITE_FROM_MIN_TO_MAX,
	SET_PROCESSED_LIST,
} from 'actions';

import BodyContainer from 'containers/BodyContainer';
import FooterContainer from 'containers/FooterContainer';
import HeaderContainer from 'containers/HeaderContainer';
import LeftSideBarContainer from 'containers/LeftSideBarContainer';
import RightSideBarContainer from 'containers/RightSideBarContainer';
import { NameOfOrderStandard } from 'internal_constants';

import Wrapper from 'containers/MainContainer/Wrapper';

function MainContainer(props) {
	useEffect(() => {
		document.title = `${props.title}`;
	});

	window.ifeellove = 'is it worked?';

	return (
		<Wrapper>
			<Grid
				container
				direction='column'
				justify='center'
				alignItems='stretch'
			>
				<HeaderContainer {...props} />
				<Grid
					container
					direction='row'
					justify='center'
					alignItems='stretch'
				>
					<LeftSideBarContainer {...props} width={'15%'} />
					<BodyContainer width={'70%'} {...props} />
					<RightSideBarContainer {...props} width={'15%'} />
				</Grid>
				<FooterContainer isDayMode={props.isDayMode} />
			</Grid>
		</Wrapper>
	);
}

const mapStateToProps = state => ({
	//initial
	preProcessedList: state.initial.preProcessedList,
	processedList: state.initial.processedList,
	length_of_processedList: state.initial.length_of_processedList,
	targetSiteList: state.initial.targetSiteList,

	//main
	listTargetCount: state.main.listTargetCount,

	//ui
	firstMenu: state.ui.firstMenu,
	secondMenu: state.ui.secondMenu,
	isDayMode: state.ui.isDayMode,

	//list_view
	isAsc: state.list_view.isAsc,
	orderStandard: state.list_view.orderStandard,
});

MainContainer.propTypes = {
	//initial
	preProcessedList: PropTypes.array,
	processedList: PropTypes.array,
	length_of_processedList: PropTypes.number,
	targetSiteList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),

	//main
	listTargetCount: PropTypes.number,

	//ui
	firstMenu: PropTypes.string,
	secondMenu: PropTypes.string,
	isDayMode: PropTypes.bool,
	MODE_CHANGER: PropTypes.func,

	//list_view
	isAsc: PropTypes.bool,
	orderStandard: PropTypes.string,
};
MainContainer.defaultProps = {
	// initial
	preProcessedList: [],
	processedList: [],
	length_of_processedList: 0,
	targetSiteList: [],

	//main
	listTargetCount: 0,

	//ui
	firstMenu: '',
	secondMenu: '',
	isDayMode: true,

	//list_view
	isAsc: true,
	orderStandard: NameOfOrderStandard.createdAt,
};

const mapDispatchToProps = {
	MODE_CHANGER,
	OPEN_SITE_FROM_MIN_TO_MAX,
	LIST_ORDER_CHANGER,
	SET_PROCESSED_LIST,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
