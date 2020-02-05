const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');

const { info } = console;

async function fetching() {
	const url = 'https://www.clien.net/service/board/park';
	let isErrorOccured = false;
	const from = Constants.Clien;

	return await axios
		.get(url)
		.then(res => {
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
				const target = `#div_content > div.list_content > div:nth-child(${i})`;
				const $ = cheerio.load(html);
				const link = $(target + ' > div.list_title > a').attr('href');

				const data = {
					link: 'https://www.clien.net' + link,
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
