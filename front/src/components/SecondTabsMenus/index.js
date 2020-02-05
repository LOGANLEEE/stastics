import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';

import store from 'store';
import * as actions from 'actions';

import Buttons from '../Buttons';
import Wrapper from './Wrapper';

function tabHandler(e, value) {
	store.dispatch(actions.secondTabMover(value));
}

export default function SecondTabsMenus({ currentSecondTabId }) {
	return (
		<Wrapper>
			<Tabs
				value={currentSecondTabId}
				onChange={(e, value) => tabHandler(e, value)}
				indicatorColor='primary'
				textColor='primary'
				variant='fullWidth'
				aria-label='full width tabs example'>
				<Tab value='ALL' label='ALL' />
				<Tab value='TOP100' label='TOP100' />
				<Tab label='' />
				<Tab label='TEST4' />
			</Tabs>
		</Wrapper>
	);
}
