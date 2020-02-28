import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SiteList from 'components/SiteList';
import 'utils/config';

const storyActions = {
	CLICK_SITE: action('CLICK_SITE'),
};

export default {
	title: 'SiteList',
	component: SiteList,
	decorator: [withKnobs],
};

const dummyData = {
	targetSiteList: [
		{
			from: 'Etoland',
			link: 'http://www.etoland.co.kr/bbs/board.php?bo_table=hit',
		},
		{ from: 'Clien', link: 'https://www.clien.net/service/board/park' },
		{ from: 'Bobae', link: 'https://www.bobaedream.co.kr/list?code=best' },
		{
			from: 'Bullpen',
			link: 'http://mlbpark.donga.com/mp/best.php?b=bullpen&m=view',
		},
		{
			from: 'SLR',
			link: 'http://www.slrclub.com/bbs/zboard.php?id=best_article',
		},
		{
			from: 'TodayHumor',
			link: 'http://www.todayhumor.co.kr/board/list.php?table=humorbest',
		},
		{ from: 'Cook', link: 'https://www.82cook.com/entiz/enti.php?bn=15' },
		{
			from: 'Gasengi',
			link: 'https://www.gasengi.com/main/board.php?bo_table=commu',
		},
		{ from: 'RuliWeb', link: 'https://bbs.ruliweb.com/best/humor' },
		{ from: 'PpomPu', link: 'http://www.ppomppu.co.kr/hot.php' },
		{ from: 'Instiz', link: 'https://www.instiz.net/pt/' },
		{ from: 'TheQoo', link: 'https://theqoo.net/hot?filter_mode=normal' },
		{
			from: 'FmKorea',
			link:
				'https://www.fmkorea.com/index.php?mid=humor&sort_index=pop&order_type=desc&listStyle=list&page=1',
		},
		{ from: 'Ilbe', link: 'https://www.ilbe.com/list/ilbe' },
		{
			from: 'DogDrip',
			link:
				'https://www.dogdrip.net/index.php?mid=dogdrip&sort_index=popular',
		},
	],
	isDayMode: false,
};

export function SiteListComponent() {
	return (
		<SiteList
			{...object('storyActions', { ...storyActions })}
			{...object('dummyData', { ...dummyData })}
		/>
	);
}
