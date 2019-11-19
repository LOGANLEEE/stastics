import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Wrapper from './Wrapper';

const { info } = console;

function TabsMenus() {
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
					label='Main'
					onClick={() => {
						setTabValue(0);
						info(tabValue);
					}}
				/>
				<Tab
					label='List'
					onClick={() => {
						setTabValue(1);
						info(tabValue);
					}}
				/>
				<Tab
					label='SITE'
					onClick={() => {
						setTabValue(2);
						info(tabValue);
					}}
				/>
				<Tab
					label='Rank'
					onClick={() => {
						setTabValue(3);
						info(tabValue);
					}}
				/>
			</Tabs>
		</Wrapper>
	);
}

export default TabsMenus;
