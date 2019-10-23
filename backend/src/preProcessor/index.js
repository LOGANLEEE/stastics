const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');
const SelectorOfSite = require('../preProcessor/SelectorOfSite');
const iconv = require('iconv-lite');
const https = require('https');

const { info } = console;

function exec() {
    info('£££ preProcessor.exec() started ');

    prisma.prePosts().then(data => {
        info('£££ total crawled list count? : ' + data.length);
        data.forEach(e => approacher(e));
    });


    info('£££ preProcessor.exec() terminated ');

};

function approacher(target) {
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

    // Set configuration for each site.
    switch (target.from) {
        case Constants.Etoland: {
            config = { responseType: 'arraybuffer' }
            isNeedEncodingConfig = true;
            break;
        };

        case Constants.PpomPu: {
            config = { responseType: 'arraybuffer' }
            isNeedEncodingConfig = true;
            break;
        };

        case Constants.Bobae: {
            const agent = new https.Agent({
                rejectUnauthorized: false
            });
            config = { httpsAgent: agent };
            isBobae = true;
            break;
        };

        case Constants.Clien: {
            isClien = true;
            break;
        };

        case Constants.TodayHumor: {
            isTodayHumor = true;
            break;
        };

        case Constants.Cook: {
            is82Cook = true;
            break;
        };

        case Constants.Gasengi: {
            isGasengi = true;
            break;
        };

        case Constants.RuliWeb: {
            isRuliWeb = true;
            break;
        };

        case Constants.TheQoo: {
            isTheQoo = true;
            break;
        };
        case Constants.Instiz: {
            isInstiz = true;
            break;
        };

        default:
            break;
    };

    axios.get(target.link, config).then(async res => {
        const link = target.link;
        if (res.status === 200) {

            // Encoding & Decoding for the site where still use EUC-KR format instead of UTF-8
            let $ = cheerio.load(isNeedEncodingConfig ? iconv.decode(res.data, 'euc-kr') : res.data);

            let title = $(SelectorOfSite[target.from].title).text();

            if (is82Cook) {
                title.includes('제 목') ? title = title.substring(title.indexOf(':') + 1) : null;
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

                if (isTheQoo) {
                    author.includes('https://') ? author = author.substring(author.indexOf('https://theqoo.net'), -1) : null;
                }
            }
            let date = '';

            // remove ',' for occurate data.
            let hitCount = $(SelectorOfSite[target.from].hitCount).text().replace(',', '');

            if (isInstiz) {
                date = $('meta[property="article:published_time"]').attr('content').replace('T', ' ').replace('+', ':').replace(':09:00', ' ');
                hitCount = hitCount.substring(hitCount.indexOf('l조회') + 3, hitCount.lastIndexOf('l'));

                if (hitCount === '') {
                    hitCount = $(SelectorOfSite[target.from].hitCount2).text().replace(',', '');
                    hitCount = hitCount.substring(hitCount.indexOf('l조회') + 3, hitCount.lastIndexOf('l'));
                }
            } else {
                date = $(SelectorOfSite[target.from].date).text();
            }

            // for Bobae
            if (isBobae) {
                date.includes('조회') ? date = date.substring(date.lastIndexOf('|') + 1) : null;
            }

            // for Clien.
            if (isClien) {
                date.includes('수정일') ? date = date.substring(date.indexOf('수정일'), -1) : null;
            }

            if (isTodayHumor || is82Cook || isGasengi) {
                hitCount.includes('조회') ? hitCount = hitCount.substring(hitCount.indexOf(':') + 1) : null;
                date.includes('원글작성시간') ? date = date.substring(date.indexOf(':') + 1) : null;
                date.includes('작성일') ? date = date.substring(date.indexOf(':') + 1) : null;
            }
            if (isRuliWeb) {
                title.includes('[', ']') ? title = title.substring(title.indexOf(']') + 1) : null;
                hitCount.includes('추천', '조회') ? hitCount = hitCount.substring(hitCount.indexOf('회') + 1) : null;

            }

            const data = {
                title: title.trim(),
                author: author.trim(),
                hitCount: parseInt(hitCount.trim()),
                registeredAt: date.trim(),
                link,
                from: target.from,
            };

            await prisma.createTempPost(data);
            await prisma.deletePrePost({ id: target.id });

        }
    }, (async error => {
        await prisma.createErrorLog({
            reason: error.toString(),
            from: target.from,
            isRead: false,
            type: 'P',
            link,
        }).then(() => {
            if (error.request.res.statusCode === 503) {
                approacher(target);
            } else {
                approacher(target);
                throw error;
            }
        });
    }));
};

module.exports = {
    exec,
};

