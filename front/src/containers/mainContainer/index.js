import Grid from '@material-ui/core/Grid';
import { LIST_ORDER_CHANGER, MODE_CHANGER, OPEN_SITE_FROM_MIN_TO_MAX, SET_PROCESSED_LIST } from 'actions';
import { NameOfOrderStandard } from 'internal_constants';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'react-virtualized/styles.css';
import BodyContainer from '../BodyContainer';
import FooterContainer from '../FooterContainer';
import HeaderContainer from '../HeaderContainer';
import LeftSideBarContainer from '../LeftSideBarContainer';
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

const mapStateToProps = state => ({
	//initial
	preProcessedList: state.initial.preProcessedList,
	processedList: state.initial.processedList,

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
	processedList: PropTypes.array,

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
	processedList: [],

	//main
	listTargetCount: 0,

	//ui
	currentFirstTabId: 0,
	currentSecondTabId: 0,
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
