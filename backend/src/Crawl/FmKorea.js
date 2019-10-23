const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');
const info = console.info;

async function fetching() {
    const url = 'https://www.fmkorea.com/index.php?mid=humor&sort_index=pop&order_type=desc&listStyle=webzine';
    let isErrorOccured = false;
    const from = Constants.FmKorea;

    return await axios.get(url).then(res => {
        if (res.status === 200) {
            return Processor(res.data);
        }
    }).catch(async e => {
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
            for (let i = 1; i < 22; i++) {
                if (!(i === 3)) {
                    const target = `#bd_486616_0 > div > div.fm_best_widget._bd_pc > ul > li:nth-child(${i})`;
                    const $ = cheerio.load(html);
                    const title = $(target + '> div > h3 > a').text().trim();
                    const link = $(target + ' > div > h3 > a').attr('href');
                    const time = $(target + '> div > div:nth-child(5) > span.regdate').text().trim();
                    const author = $(target + '> div > div:nth-child(5) > span.author').text().replace('/', '').trim();
                    const data = {
                        title,
                        author,
                        link: 'https://www.fmkorea.com' + link,
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
        };
        //info(`£££ is ${from}  has Error? :  ${isErrorOccured}`);
        return new Promise((resolve, reject) => {
            resolve({ from, isErrorOccured });
            reject({ from, isErrorOccured });
        });
    };
}

module.exports = {
    fetching
}