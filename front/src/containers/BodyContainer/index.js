import Buttons from 'components/Buttons';
import ListRenderer from 'components/ListRenderer';
import MainPage from 'components/MainPage';
import SecondTabsMenus from 'components/SecondTabsMenus';
import React from 'react';
import { connect } from 'react-redux';
import { OPEN_SITE_FROM_MIN_TO_MAX, LIST_ORDER_CHANGER } from 'actions';
import Wrapper from './Wrapper';

function ContentRenderer(props) {
	const {
		currentFirstTabId,
		isAsc,
		orderStandard,
		LIST_ORDER_CHANGER,
		sortedListByCreateAt_ASC,
		sortedListByHitCount_ASC,
		sortedListByRegisteredAt_ASC,
		sortedListByCreateAt_DESC,
		sortedListByHitCount_DESC,
		sortedListByRegisteredAt_DESC,
		OPEN_SITE_FROM_MIN_TO_MAX,
		preProcessedList,
	} = props;
	switch (currentFirstTabId) {
		//Main
		case 0: {
			return <MainPage />;
		}
		// List
		case 1: {
			return [
				<SecondTabsMenus key={`ContentRenderer > SecondTabsMenus`} {...props} />,
				<Buttons
					key={`ContentRenderer > Buttons`}
					OPEN_SITE_FROM_MIN_TO_MAX={props.OPEN_SITE_FROM_MIN_TO_MAX}
				/>,
				<ListRenderer
					key={`ContentRenderer > ListRenderer`}
					LIST_ORDER_CHANGER={LIST_ORDER_CHANGER}
					processedList={preProcessedList}
					isAsc={isAsc}
					orderStandard={orderStandard}
				/>,
			];
		}
		// Site
		case 2: {
			return <div> 2222</div>;
		}
		// Rank
		case 3: {
			return <div> 3333</div>;
		}
	}
}

function BodyContainer(props) {
	return (
		<Wrapper width={props.width}>
			<ContentRenderer {...props} />
		</Wrapper>
	);
}

const mapDispatchToProps = {
	OPEN_SITE_FROM_MIN_TO_MAX,
	LIST_ORDER_CHANGER,
};

export default connect(null, mapDispatchToProps)(BodyContainer);
