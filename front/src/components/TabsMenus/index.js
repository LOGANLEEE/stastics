import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Wrapper from './Wrapper';
import store from 'store';
import * as actions from 'actions';

const { info } = console;

function tabHandler(e, value) {
	store.dispatch(actions.firstTabMover(value));
}

function TabsMenus({ currentFirstTabId, isDayMode }) {
	return (
		<Wrapper isDayMode={isDayMode}>
			<Tabs
				value={currentFirstTabId}
				onChange={(e, value) => tabHandler(e, value)}
				// indicatorColor='primary'
				// textColor='primary'
				variant='fullWidth'
				aria-label='full width tabs example'>
				<Tab label='Main' value={0} />
				<Tab label='List' value={1} />
				<Tab label='SITE' value={2} />
				<Tab label='Rank' value={3} />
			</Tabs>
		</Wrapper>
	);
}

export default TabsMenus;
