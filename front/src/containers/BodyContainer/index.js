import React, { useEffect } from 'react';

import ListRenderer from 'components/ListRenderer';
import MainPage from 'components/MainPage';
import SecondTabsMenus from 'components/SecondTabsMenus';

import Wrapper from 'containers/BodyContainer/Wrapper';
import { FIRST_MENU } from 'internal_constants';

function ContentRenderer(props) {
	const {
		firstMenu,
		processedList,
		isAsc,
		orderStandard,
		LIST_ORDER_CHANGER,
		SET_PROCESSED_LIST,
	} = props;

	useEffect(() => {
		SET_PROCESSED_LIST(orderStandard, isAsc);
	}, [isAsc, orderStandard]);

	switch (firstMenu) {
		//Main
		case FIRST_MENU.MAIN: {
			return <MainPage />;
		}
		// List
		case FIRST_MENU.LIST: {
			return [
				<SecondTabsMenus
					key={`ContentRenderer > SecondTabsMenus`}
					{...props}
				/>,
				<ListRenderer
					key={`ContentRenderer > ListRenderer`}
					LIST_ORDER_CHANGER={LIST_ORDER_CHANGER}
					processedList={processedList}
				/>,
			];
		}
		// Site
		case FIRST_MENU.SITE: {
			return <div> 챗봇</div>;
		}
		// Rank
		case FIRST_MENU.RANK: {
			return <div> 번역봇</div>;
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

export default BodyContainer;
