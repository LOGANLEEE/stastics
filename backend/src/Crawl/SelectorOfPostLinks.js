const Constants = require('../Constants');

const Etoland = {
	link: 'http://www.etoland.co.kr/bbs/board.php?bo_table=hit',
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
	prefix: 'http://www.etoland.co.kr',
};

const Clien = {
	link: 'https://www.clien.net/service/board/park',
	from: Constants.Clien,
	startIndex: 1,
	endIndex: 30,
	indexGap: 1,
	prefix: 'https://www.clien.net',
	selector: i => `#div_content > div.list_content > div:nth-child(${i}) > div.list_title > a`,
};

const Bobae = {
	link: 'https://www.bobaedream.co.kr/list?code=best',
	from: Constants.Bobae,
	startIndex: 1,
	endIndex: 30,
	indexGap: 1,
	prefix: 'https://www.bobaedream.co.kr',
	selector: i => `#boardlist > tbody > tr:nth-child(${i}) > td.pl14 > a.bsubject`,
};

const Bullpen = {
	link: 'http://mlbpark.donga.com/mp/best.php?b=bullpen&m=view',
	from: Constants.Bullpen,
	startIndex: 1,
	endIndex: 25,
	indexGap: 1,
	selector: i =>
		`#container > div.contents > div.left_cont > div.tbl_box > table > tbody > tr:nth-child(${i}) > td:nth-child(2) > a`,
};

const SLR = {
	link: 'http://www.slrclub.com/bbs/zboard.php?id=best_article',
	from: Constants.SLR,
	startIndex: 1,
	endIndex: 30,
	indexGap: 1,
	prefix: 'http://www.slrclub.com',
	selector: i => `#bbs_list > tbody > tr:nth-child(${i}) > td.sbj > a`,
};

const TodayHumor = {
	link: 'http://www.todayhumor.co.kr/board/list.php?table=humorbest',
	from: Constants.TodayHumor,
	startIndex: 2,
	endIndex: 31,
	indexGap: 1,
	prefix: 'http://www.todayhumor.co.kr',
	selector: i => `body > div.whole_box > div > div > table > tbody > tr:nth-child(${i}) > td.subject > a`,
};

const Cook = {
	link: 'https://www.82cook.com/entiz/enti.php?bn=15',
	from: Constants.Cook,
	startIndex: 1,
	endIndex: 10,
	indexGap: 1,
	prefix: 'https://www.82cook.com',
	selector: i => `#column1 > div.leftbox.Best > ul > li:nth-child(${i}) > a`,
};

const Gasengi = {
	link: 'https://www.gasengi.com/main/board.php?bo_table=commu',
	from: Constants.Gasengi,
	startIndex: 1,
	endIndex: 5,
	indexGap: 1,
	prefix: 'https://www.gasengi.com',
	selector: (i, j) =>
		`#rightcolumn > div.rank_div > div.rank_dbox > ol > span:nth-child(${i}) > li:nth-child(${j}) > a`,
};
const RuliWeb = {
	link: 'https://bbs.ruliweb.com/best/humor',
	from: Constants.RuliWeb,
	startIndex: 1,
	endIndex: 30,
	indexGap: 1,
	selector: i => `#best_body > table > tbody > tr:nth-child(${i}) > td.subject > a`,
};
const PpomPu = {
	link: 'http://www.ppomppu.co.kr/hot.php',
	from: Constants.PpomPu,
	startIndex: 4,
	endIndex: 23,
	indexGap: 1,
	prefix: 'http://www.ppomppu.co.kr',
	selector: i =>
		`body > div > div.contents > div.container > div:nth-child(2) > div.board_box > table.board_table > tbody > tr:nth-child(${i}) > td:nth-child(4) > a`,
};
const Instiz = {
	link: 'https://www.instiz.net/pt/',
	startIndex: 1,
	endIndex: 10,
	indexGap: 1,
	from: Constants.Instiz,
	prefix: 'https:',
	selector: (i, j) => `#rank1to${j}0 > div:nth-child(${i}) > div.rank_subject > a:nth-child(1)`,
};
const FmKorea = {
	link: 'https://www.fmkorea.com/index.php?mid=humor&sort_index=pop&order_type=desc&listStyle=list&page=1',
	from: Constants.FmKorea,
	startIndex: 4,
	endIndex: 23,
	indexGap: 1,
	from: Constants.FmKorea,
	prefix: 'https://www.fmkorea.com',
	selector: i => `#bd_486616_0 > div > table > tbody > tr:nth-child(${i}) > td.title.hotdeal_var8 > a.hx`,
};
const TheQoo = {
	link: 'https://theqoo.net/hot?filter_mode=normal',
	from: Constants.TheQoo,
	startIndex: 8,
	endIndex: 36,
	indexGap: 1,
	from: Constants.TheQoo,
	prefix: 'https://theqoo.net',

	selector: i => `#bd_801402415_0 > div > table > tbody > tr:nth-child(${i}) > td.title > a:nth-child(1)`,
};
const Ilbe = {
	link: 'https://www.ilbe.com/list/ilbe',
	startIndex: 7,
	endIndex: 36,
	indexGap: 1,
	from: Constants.Ilbe,
	prefix: 'https://www.ilbe.com/',
	selector: i => `#content-wrap > div.board-wrap > div.board-list > ul > li:nth-child(${i}) > span.title > a`,
	hitCount: i => `#content-wrap > div.board-wrap > div.board-list > ul > li:nth-child(${i}) > span.view`,
};

const HumorUniv = {
	link: 'http://web.humoruniv.com/board/humor/list.html?table=pick',
	from: Constants.HumorUniv,
	startIndex: 1,
	endIndex: 39,
	indexGap: 1,
	from: Constants.HumorUniv,
	prefix: 'http://web.humoruniv.com/board/humor',
	selector: i =>
		`#cnts_list_new > div:nth-child(1) > table:nth-child(3) > tbody > tr:nth-child(${i}) > td.li_sbj > a`,
};

const DogDrip = {
	link: 'https://www.dogdrip.net/index.php?mid=dogdrip&sort_index=popular',
	from: Constants.DogDrip,
	startIndex: 1,
	endIndex: 20,
	indexGap: 1,
	from: Constants.DogDrip,
	prefix: 'https://www.dogdrip.net',
	selector: i =>
		`#main > div > div.eq.section.secontent.background-color-content > div > div.ed.board-list > table > tbody > tr:nth-child(${i}) > td.title > a`,
	hitCount: i =>
		`#main > div > div.eq.section.secontent.background-color-content > div > div.ed.board-list > table > tbody > tr:nth-child(${i}) > td.ed.voteNum.text-primary`,
};

const targetList = [
	Etoland,
	Clien,
	Bobae,
	Bullpen, // has problem
	SLR,
	TodayHumor,
	Cook,
	Gasengi,
	RuliWeb,
	PpomPu,
	Instiz,
	TheQoo,
	FmKorea, // IP BLOCK
	Ilbe, // unable to approach from abroad.
	DogDrip, // this site don't have hitCount only have recommendation count.
	// HumorUniv, // doesn't work dont know why.
];

module.exports = {
	Clien,
	Bobae,
	Bullpen,
	Etoland,
	SLR,
	TodayHumor,
	Cook,
	Gasengi,
	RuliWeb,
	PpomPu,
	Instiz,
	TheQoo,
	FmKorea,
	DogDrip,
	HumorUniv,
	Ilbe,
	targetList,
};
