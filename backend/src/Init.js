const crawl = require('./crawl');
const PreProcessor = require('./PreProcessor');
const moment = require('moment');
const LinkGetter = require('./Crawl/LinkGetter');

// setInterval(() => {
//     info(`=================`);
//     Crawl.init(),  10000// 10s
// });

function start() {
	// info(`=================`);
	// crawl.init(); // 10s
	LinkGetter.exec();
	// PreProcessor.exec();
	// const _moment = moment.locale('ko-KR');
	// console.info('£££ : ' + moment('2020-01-12 22:28').format('YYYY-MM-DD,h:mm a'));
}

module.exports = {
	start,
};
