const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');

const { info } = console;

async function fetching() {
    const url = 'http://mlbpark.donga.com/mp/best.php?b=bullpen&m=view';
    let isErrorOccured = false;
    const from = Constants.Bullpen;

    return await axios.get(url).then(async (res) => {
        if (res.status === 200) {
            return Processor(res.data);
        }
    }).catch(async (e) => {
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
        //5 ~ 35.
        try {
            for (let i = 1; i < 25; i++) {
                const target = `#container > div.contents > div.left_cont > div.tbl_box > table > tbody > tr:nth-child(${i}) `;
                const $ = cheerio.load(html);
                const link = $(target + '> td:nth-child(2) > a').attr('href');
                const title = $(target + '> td:nth-child(2) > a').text();
                const time = $(target + '> td:nth-child(4) > span').text();
                const author = $(target + '> td:nth-child(3) > span').text();

                if (author !== '엠팍제휴팀' && author !== '담당자') {
                    const data = {
                        title,
                        author,
                        link,
                        hitCount: 0,
                        registeredAt: time,
                        from,
                    };
                    await prisma.createPrePost(data);
                }
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
    fetching
}