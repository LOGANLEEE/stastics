import React from 'react';
import TabsMenus from 'components/TabsMenus';
import Wrapper from './Wrapper';

function Header(props) {
	return (
		<Wrapper>
			<TabsMenus {...props} />
		</Wrapper>
	);
}

export default Header;
