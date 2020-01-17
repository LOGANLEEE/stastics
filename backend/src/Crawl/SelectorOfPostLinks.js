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
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};

const Bobae = {
	link: 'https://www.bobaedream.co.kr/list?code=best',
	from: Constants.Bobae,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};

const Bullpen = {
	link: 'http://mlbpark.donga.com/mp/best.php?b=bullpen&m=view',
	from: Constants.Bullpen,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};

const SLR = {
	link: 'http://www.slrclub.com/bbs/zboard.php?id=best_article',
	from: Constants.SLR,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};

const TodayHumor = {
	link: 'http://www.todayhumor.co.kr/board/list.php?table=humorbest',
	from: Constants.TodayHumor,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};

const Cook = {
	link: 'https://www.82cook.com/entiz/enti.php?bn=15',
	from: Constants.Cook,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};

const Gasengi = {
	link: 'https://www.gasengi.com/main/board.php?bo_table=commu',
	from: Constants.Gasengi,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};
const RuliWeb = {
	link: 'https://bbs.ruliweb.com/best/humor',
	from: Constants.RuliWeb,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};
const PpomPu = {
	link: 'http://www.ppomppu.co.kr/hot.php',
	from: Constants.PpomPu,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};
const Instiz = {
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
	link: 'https://www.instiz.net/pt/',
	from: Constants.Instiz,
};
const FmKorea = {
	link: 'https://www.fmkorea.com/index.php?mid=humor&sort_index=pop&order_type=desc&listStyle=webzine',
	from: Constants.FmKorea,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};
const TheQoo = {
	link: 'https://theqoo.net/hot?filter_mode=normal',
	from: Constants.TheQoo,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};
const Ilbe = {
	link: 'https://www.ilbe.com/list/ilbe',
	from: Constants.Ilbe,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};

const HumorUniv = {
	link: 'http://www.todayhumor.co.kr/board/list.php?table=humorbest',
	from: Constants.HumorUniv,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};

const DogDrip = {
	link: 'https://www.dogdrip.net/index.php?mid=dogdrip&sort_index=popular',
	from: Constants.DogDrip,
	startIndex: 8,
	endIndex: 126,
	indexGap: 2,
	from: Constants.Etoland,
	selector: i => `#fboardlist > table > tbody > tr:nth-child(${i}) > td.mw_basic_list_subject > a:nth-child(3)`,
};

const targetList = [
	Etoland,
	// Clien,
	// Bobae,
	// Bullpen,
	// SLR,
	// TodayHumor,
	// Cook,
	// Gasengi,
	// RuliWeb,
	// PpomPu,
	// Instiz,
	// TheQoo,
	// FmKorea,
	// DogDrip,
	// Ilbe,
	// HumorUniv,
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
