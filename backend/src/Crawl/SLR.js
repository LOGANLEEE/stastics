const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');

const { info } = console;

async function fetching() {
	const url = 'http://www.slrclub.com/bbs/zboard.php?id=best_article';
	let isErrorOccured = false;
	const from = Constants.SLR;

	return await axios
		.get(url)
		.then(async res => {
			if (res.status === 200) {
				return Processor(res.data);
			}
		})
		.catch(async e => {
			await prisma.createErrorLog({
				reason: e.toString(),
				from,
				isRead: false,
				type: 'F',
			});
			isErrorOccured = true;
			throw e;
		});

	async function Processor(html) {
		try {
			for (let i = 1; i < 31; i++) {
				const target = `#bbs_list > tbody > tr:nth-child(${i})`;
				const $ = cheerio.load(html);
				const link = $(target + '> td.sbj > a').attr('href');
				const data = {
					link: 'http://www.slrclub.com' + link,
					from,
				};

				await prisma.createPostLinks(data);
			}
		} catch (e) {
			await prisma.createErrorLog({
				reason: e.toString(),
				from,
				isRead: false,
				type: 'Q',
			});
			isErrorOccured = true;
			throw e;
		}
		//info(`£££ is ${from}  has Error? :  ${isErrorOccured}`);
		return new Promise((resolve, reject) => {
			resolve({ from, isErrorOccured });
			reject({ from, isErrorOccured });
		});
	}
}

module.exports = {
	fetching,
};
