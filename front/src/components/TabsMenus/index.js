import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Wrapper from './Wrapper';
import store from 'store';
import * as actions from 'actions';
import { FIRST_MENU } from 'internal_constants';

const { info } = console;

function tabHandler(e, value) {
	store.dispatch(actions.firstTabMover(value));
}

function TabsMenus({ firstMenu, isDayMode }) {
	return (
		<Wrapper isDayMode={isDayMode}>
			<Tabs
				value={firstMenu}
				onChange={(e, value) => tabHandler(e, value)}
				// indicatorColor='primary'
				// textColor='primary'
				variant='fullWidth'
				aria-label='full width tabs example'
			>
				<Tab label={FIRST_MENU.MAIN} value={FIRST_MENU.MAIN} />
				<Tab label={FIRST_MENU.LIST} value={FIRST_MENU.LIST} />
				<Tab label={FIRST_MENU.SITE} value={FIRST_MENU.SITE} />
				<Tab label={FIRST_MENU.RANK} value={FIRST_MENU.RANK} />
			</Tabs>
		</Wrapper>
	);
}

export default TabsMenus;
