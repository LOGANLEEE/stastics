import React from 'react';
import TabsMenus from 'components/TabsMenus';
import Wrapper from 'components/TabsMenus/Wrapper';

function HeaderContainer(props) {
	return (
		<Wrapper>
			<TabsMenus {...props} />
		</Wrapper>
	);
}

export default HeaderContainer;
