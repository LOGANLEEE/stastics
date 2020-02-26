import React, { useState } from 'react';

import { site_present_color } from 'internal_constants';
import Wrapper from 'components/SiteList/Wrapper';

const { info } = console;

function listRenderer(targetSiteList, CLICK_SITE) {
	return (
		<ul className='list_holder'>
			{targetSiteList.map((site, idx) => {
				return (
					<li
						key={`components > SiteList > ${idx}`}
						style={{
							backgroundColor: site_present_color[site.from],
						}}
						onClick={() => CLICK_SITE(site.link)}
					>
						{site.from}
					</li>
				);
			})}
		</ul>
	);
}

function SiteList({ targetSiteList, isDayMode, CLICK_SITE }) {
	info('£££ 1 : ', targetSiteList);
	info('£££ 2 : ', isDayMode);
	info('£££ 3 : ', CLICK_SITE);
	return (
		<Wrapper isDayMode={isDayMode}>
			<div>사이트별 모아보기</div>

			{listRenderer(targetSiteList, CLICK_SITE)}
		</Wrapper>
	);
}

export default SiteList;
