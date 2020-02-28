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

function SiteList({ targetSiteList, isDayMode, CLICK_SITE, title }) {
	return (
		<Wrapper isDayMode={isDayMode}>
			<div className='title'>{title}</div>

			{listRenderer(targetSiteList, CLICK_SITE)}
		</Wrapper>
	);
}

export default SiteList;
