import React, { useEffect } from 'react';
import Wrapper from 'containers/LeftSideBarContainer/Wrapper';
import SiteList from 'components/SiteList';
import { FIRST_MENU } from 'internal_constants';

const dummyData = {
	isDayMode: false,
	siteTargetList: [
		'Etoland',
		'Clien',
		'Bobae',
		'Bullpen',
		'SLR',
		'TodayHumor',
		'Cook',
		'Gasengi',
		'RuliWeb',
		'PpomPu',
		'Instiz',
		'TheQoo',
		'FmKorea',
		'Ilbe',
		'DogDrip',
	],
};

function switcher(isDayMode, firstMenu, targetSiteList) {
	switch (firstMenu) {
		case FIRST_MENU.MAIN: {
			// return <SiteList {...dummyData} />;
		}
		case FIRST_MENU.LIST: {
			return (
				<SiteList
					targetSiteList={targetSiteList}
					isDayMode={isDayMode}
				/>
			);
		}
		case FIRST_MENU.SITE: {
			return;
		}
		case FIRST_MENU.RANK: {
			return;
		}
		default:
			return;
	}
}
function LeftSideBarContainer({
	targetSiteList,
	width,
	isDayMode,
	firstMenu,
	secondMenu,
}) {
	return (
		<Wrapper width={width} isDayMode={isDayMode}>
			{switcher(isDayMode, firstMenu, targetSiteList)}
		</Wrapper>
	);
}

export default LeftSideBarContainer;
