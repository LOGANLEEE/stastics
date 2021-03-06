const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');

const { info } = console.info;

async function fetching() {
	const url = 'https://theqoo.net/hot?filter_mode=normal';
	let isErrorOccured = false;
	const from = Constants.TheQoo;

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
			for (let i = 6; i < 33; i++) {
				const target = `#bd_801402415_0 > div > table > tbody > tr:nth-child(${i})`;
				const $ = cheerio.load(html);
				const link = $(target + '> td.title > a:nth-child(1)').attr('href');
				const data = {
					link: 'https://theqoo.net' + link,
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
