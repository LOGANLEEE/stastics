const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');
const SelectorOfSite = require('./SelectorOfTargetSite');
const iconv = require('iconv-lite');
const https = require('https');
const util = require('../util');
const moment = require('moment');

const { info } = console;

const dayList = ['월', '화', '수', '목', '금', '토', '일'];

function exec(data) {
	info('£££ PreProcessor.exec() started ');
	// prisma.postLinkses().then(data => {
	// 	info('£££ total crawled list count? : ' + data.length);
	// 	data.forEach(e => approacher(e));
	// });

	info('£££ PreProcessor.exec() terminated ');
}

function approacher(target, count) {
	const countLimit = 5;
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
	let isIlbe = false;
	let isDogDrip = false;
	let isEtoland = false;

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
		case Constants.Ilbe: {
			isIlbe = true;
		}
		case Constants.Ilbe: {
			isDogDrip = true;
		}
		default:
			break;
	}
	if (count < countLimit) {
		try {
			axios.get(target.link, config).then(
				async res => {
					if (res.status === 200) {
						// Encoding & Decoding for the site where still use EUC-KR format instead of UTF-8
						let $ = cheerio.load(isNeedEncodingConfig ? iconv.decode(res.data, 'euc-kr') : res.data);
						let title = $(SelectorOfSite[target.from].title).text();

						if (is82Cook) {
							title.includes('제 목') ? (title = title.substring(title.indexOf(':') + 1)) : null;
						}

						let author = '';

						// Instiz doesn't have author for it.
						if (!isInstiz) {
							// Clien use image(jpg,gif) to display user name.
							if (isClien) {
								const writer = $(SelectorOfSite[target.from].author).text();
								const imgWriter = $(SelectorOfSite[target.from].imgAuthor).attr('alt');
								author = writer !== '' ? writer : imgWriter;
							} else {
								author = $(SelectorOfSite[target.from].author).text();
							}

							if (isPpomPu) {
								if (author === '' || author === undefined) {
									author = $(SelectorOfSite[target.from].author2).text();
									if (author === '' || author === undefined) {
										author = $(SelectorOfSite[target.from].author3).attr('alt');
										if (author === '' || author === undefined) {
											author = $(SelectorOfSite[target.from].author4).text();
										}
									}
								}
							}

							if (isTheQoo) {
								author.includes('https://')
									? (author = author.substring(author.indexOf('https://theqoo.net'), -1))
									: null;
							}
						}
						let date = '';

						// remove ',' for occurate data.
						hitCount = $(SelectorOfSite[target.from].hitCount)
							.text()
							.replace(',', '');

						if (isIlbe || isDogDrip) {
							hitCount = target.hitCount;
						}

						if (isInstiz) {
							date = $('meta[property="article:published_time"]')
								.attr('content')
								.replace('T', ' ')
								.replace('+', ':')
								.replace(':09:00', ' ');
							hitCount = hitCount.substring(hitCount.indexOf('l조회') + 3, hitCount.lastIndexOf('l'));

							if (hitCount === '') {
								hitCount = $(SelectorOfSite[target.from].hitCount2)
									.text()
									.replace(',', '');
								hitCount = hitCount.substring(hitCount.indexOf('l조회') + 3, hitCount.lastIndexOf('l'));
							}
						} else {
							date = $(SelectorOfSite[target.from].date).text();
						}

						// for Bobae
						if (isBobae) {
							date.includes('조회') ? (date = date.substring(date.lastIndexOf('|') + 1)) : null;
						}

						// for Clien.
						if (isClien) {
							date.includes('수정일') ? (date = date.substring(date.indexOf('수정일'), -1)) : null;
						}

						if (isTodayHumor || is82Cook || isGasengi) {
							hitCount.includes('조회')
								? (hitCount = hitCount.substring(hitCount.indexOf(':') + 1))
								: null;
							date.includes('원글작성시간') ? (date = date.substring(date.indexOf(':') + 1)) : null;
							date.includes('작성일') ? (date = date.substring(date.indexOf(':') + 1)) : null;

							// match date format as YYYY-DD-MM hh:mm
							if (isGasengi) {
								if (date !== null) {
									date = '20' + date.trim();
								}
							}
						}

						if (isRuliWeb) {
							title.includes('[', ']') ? (title = title.substring(title.indexOf(']') + 1)) : null;
							hitCount.includes('추천', '조회')
								? (hitCount = hitCount.substring(hitCount.indexOf('회') + 1))
								: null;
						}
						if (isPpomPu) {
							let tempDate = '';
							date.trim()
								.split('\t')
								.forEach(e => {
									if (e.indexOf('등록일') > -1) {
										tempDate = e;
									}
								});
							tempDate
								.trim()
								.split('\n')
								.forEach(e => {
									if (e.indexOf('등록일') > -1) {
										date = e.replace('등록일', '').replace(':', '');
									}
								});
							if (hitCount === '') {
								hitCount = $(SelectorOfSite[target.from].hitCount2)
									.text()
									.replace(',', '');
							}
							hitCount
								.trim()
								.split('\t')
								.forEach(e => {
									if (e.indexOf('조회수') > -1) {
										e.trim()
											.split('\n')
											.forEach(ee => {
												// info('£££ ee: ', ee);
												if (ee.indexOf('조회수') > -1) {
													ee.split('/').forEach(eee => {
														// info('£££ eee: ', eee);
														if (eee.indexOf('조회수') > -1) {
															hitCount = eee
																.replace('조회수', '')
																.replace(':', '')
																.trim();
														}
													});
												}
											});
									}
								});
						}


						// Use moment.js instead of manual processing

						// 요일 제거
						// dayList.forEach(day => {
						// 	date = util.replaceAll(date, day, '');
						// });

						// 일자 데이터 재가공
						// date = util.replaceAll(date, '/', '-');
						// date = util.replaceAll(date, '.', '-');
						// date = util.replaceAll(date, '(', '');
						// date = util.replaceAll(date, ')', '');
						// date = date.replace(' ', 'T');
						// date = date + '+09:00';

						// those site has more white spalce
						// if (isEtoland || isBobae) {
						// 	date = date.replace(' ', '');
						// }

						date = moment(date, 'YYYY-DD-MM HH:mm').format('YYYY-DD-MM HH:mm');

						const data = {
							title: title.trim(),
							author: author.trim(),
							hitCount: parseInt(hitCount),
							registeredAt: date,
							link,
							from: target.from,
						};

						if (title.trim() !== '') {
							await prisma
								.createpreProcessedPost(data)
								.then(() => {
									prisma.deletePostLinks({ id: target.id }).catch(() => {
										return info('ERROR [PreProcessor] deletePostLinks has error: ');
									});
								})
								.catch(() => {
									return info('ERROR [PreProcessor] createpreProcessedPost has error: ');
								});
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
								approacher(target, count + 1);
							} else {
								approacher(target, count + 1);
							}
						});
				},
			);
		} catch (error) {
			async error =>
				await prisma.createErrorLog({
					reason: error.toString(),
					from: target.from,
					isRead: false,
					type: 'P',
					link,
				});
		}
	} else {
		async () =>
			await prisma.createErrorLog({
				reason: `[PreProcessor] Axios attempt count has reached limit(${countLimit}).`,
				from: target.from,
				isRead: false,
				type: 'P',
				link,
			});
	}
}

module.exports = {
	exec,
	approacher,
};
