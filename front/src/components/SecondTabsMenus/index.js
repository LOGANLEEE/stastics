import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';

import Buttons from '../Buttons';
import Wrapper from './Wrapper';

export default function SecondTabsMenus(props) {
	const [tabValue, setTabValue] = useState(0);

	return (
		<Wrapper>
			<Tabs
				value={tabValue}
				// onChange={() => setTabValue()}
				indicatorColor='primary'
				textColor='primary'
				variant='fullWidth'
				aria-label='full width tabs example'>
				<Tab
					label='ALL'
					onClick={() => {
						setTabValue(0);
					}}
				/>
				<Tab
					label='TOP100'
					onClick={() => {
						setTabValue(1);
					}}
				/>
				<Tab
					label='TEST3'
					onClick={() => {
						setTabValue(2);
					}}
				/>
				<Tab
					label='TEST4'
					onClick={() => {
						setTabValue(3);
					}}
				/>
			</Tabs>
			<Buttons {...props} />
		</Wrapper>
	);
}
