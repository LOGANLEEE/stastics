const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');
const SelectorOfPostLinks = require('./SelectorOfPostLinks');
const iconv = require('iconv-lite');
const https = require('https');
const preProcessor = require('../preProcessor');

const { info } = console;

function exec() {
	/*
		Get information (link,startIndex,endIndex,indexGap,from,selector,prefix) of target site.
	*/
	SelectorOfPostLinks.targetList.forEach(target => {
		approacher(target);
	});
}

/*
	approacher will approch to target webstie to get a each post's url info.
	Also, the way of approach is different for each site.
*/
function approacher(target) {
	const link = target.link;
	let config = {};
	let isNeedEncodingConfig = false;
	let isClien = false;
	let isBobae = false;
	let isTodayHumor = false;
	let is82Cook = false;
	let isGasengi = false;
	let isRuliWeb = false;
	let isTheQoo = false;
	let isInstiz = false;
	let isPpomPu = false;
	let isEtoland = false;
	let isSLR = false;
	let isFmKorea = false;
	let HumorUniv = false;

	// Set configuration for each site.
	switch (target.from) {
		case Constants.Etoland: {
			config = { responseType: 'arraybuffer' };
			isNeedEncodingConfig = true;
			isEtoland = true;
			break;
		}

		case Constants.PpomPu: {
			config = { responseType: 'arraybuffer' };
			isPpomPu = true;
			isNeedEncodingConfig = true;
			break;
		}

		case Constants.Bobae: {
			const agent = new https.Agent({
				rejectUnauthorized: false,
			});
			config = { httpsAgent: agent };
			isBobae = true;
			break;
		}

		case Constants.Clien: {
			isClien = true;
			break;
		}

		case Constants.TodayHumor: {
			isTodayHumor = true;
			break;
		}

		case Constants.Cook: {
			is82Cook = true;
			break;
		}

		case Constants.Gasengi: {
			isGasengi = true;
			break;
		}

		case Constants.RuliWeb: {
			isRuliWeb = true;
			break;
		}

		case Constants.TheQoo: {
			isTheQoo = true;
			break;
		}
		case Constants.Instiz: {
			isInstiz = true;
			break;
		}
		case Constants.SLR: {
			isSLR = true;
			break;
		}
		case Constants.FmKorea: {
			isFmKorea = true;
			break;
		}
		case Constants.HumorUniv: {
			isHumorUniv = true;
		}
		default:
			break;
	}
	try {
		axios.get(target.link, config).then(
			res => {
				if (res.status === 200) {
					// Encoding & Decoding for the site where still use EUC-KR format instead of UTF-8
					const $ = cheerio.load(isNeedEncodingConfig ? iconv.decode(res.data, 'euc-kr') : res.data);
					const { startIndex, endIndex, indexGap, selector } = SelectorOfPostLinks[target.from];
					let link;
					for (let i = startIndex; i < endIndex + 1; i += indexGap) {
						if (isGasengi || isInstiz) {
							for (let j = startIndex; j < endIndex + 1; j += indexGap) {
								link = $(selector(i, j)).attr('href');

								// link value checker
								if (typeof link === 'string') {
									if (isGasengi) {
										link = link.replace('..', '');
									}
									if (isInstiz) {
										link = link.replace('//', '');
									}
									if (isGasengi) {
										link = SelectorOfPostLinks[target.from].prefix + link;
									}
									const data = {
										link,
										from: target.from,
									};
									// await prisma.createPostLinks(data);
									preProcessor.approacher(data);
								}
							}
						} else {
							link = $(selector(i)).attr('href');

							// link value checker
							if (typeof link === 'string') {
								if (isEtoland) {
									link = link.replace('..', '');
								}
								if (
									isClien ||
									isTheQoo ||
									isTodayHumor ||
									isPpomPu ||
									is82Cook ||
									isBobae ||
									isSLR ||
									isEtoland ||
									isFmKorea ||
									isHumorUniv
								) {
									link = SelectorOfPostLinks[target.from].prefix + link;
								}
								const data = {
									link,
									from: target.from,
								};

								// can i pass data to preProcessor?
								await prisma.createPostLinks(data).then(res => info("£££ res : ", res));
								// preProcessor.exec(data);
								// preProcessor.approacher(data);
							}
						}
					}
				}
			},
			async error => {
				await prisma
					.createErrorLog({
						reason: error.toString(),
						from: target.from,
						isRead: false,
						type: 'P',
						link,
					})
					.then(() => {
						if (error.request.res.statusCode === 503) {
							approacher(target);
						} else {
							approacher(target);
							throw error;
						}
					});
			},
		);
	} catch (e) {
		console.info(`£££ Error caught : `, e);
	}
}

module.exports = {
	exec,
};
