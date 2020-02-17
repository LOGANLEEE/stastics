import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';

import store from 'store';
import * as actions from 'actions';

import Buttons from '../Buttons';
import Wrapper from './Wrapper';
import { SECOND_MENU } from 'internal_constants';

function tabHandler(e, value) {
	store.dispatch(actions.secondTabMover(value));
}

export default function SecondTabsMenus({ secondMenu }) {
	return (
		<Wrapper>
			<Tabs
				value={secondMenu}
				onChange={(e, value) => tabHandler(e, value)}
				indicatorColor='primary'
				textColor='primary'
				variant='fullWidth'
				aria-label='full width tabs example'
			>
				<Tab value={SECOND_MENU.ALL} label={SECOND_MENU.ALL} />
				<Tab value={SECOND_MENU.TOP100} label={SECOND_MENU.TOP100} />
				<Tab value={SECOND_MENU.TEST3} label={SECOND_MENU.TEST3} />
				<Tab value={SECOND_MENU.TEST4} label={SECOND_MENU.TEST4} />
			</Tabs>
		</Wrapper>
	);
}
