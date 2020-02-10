import Buttons from 'components/Buttons';
import ListRenderer from 'components/ListRenderer';
import MainPage from 'components/MainPage';
import SecondTabsMenus from 'components/SecondTabsMenus';
import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';

function ContentRenderer(props) {
	const { currentFirstTabId, processedList, isAsc, orderStandard, LIST_ORDER_CHANGER, SET_PROCESSED_LIST } = props;

	useEffect(() => {
		SET_PROCESSED_LIST(orderStandard, isAsc);
	}, [isAsc, orderStandard]);

	switch (currentFirstTabId) {
		//Main
		case 0: {
			return <MainPage />;
		}
		// List
		case 1: {
			return [
				<SecondTabsMenus key={`ContentRenderer > SecondTabsMenus`} {...props} />,
				<ListRenderer
					key={`ContentRenderer > ListRenderer`}
					LIST_ORDER_CHANGER={LIST_ORDER_CHANGER}
					processedList={processedList}
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

export default BodyContainer;
