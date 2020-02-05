import React from 'react';
import TabsMenus from 'components/TabsMenus';
import Wrapper from './Wrapper';

function HeaderContainer(props) {
	return (
		<Wrapper>
			<TabsMenus {...props} />
		</Wrapper>
	);
}

export default HeaderContainer;
