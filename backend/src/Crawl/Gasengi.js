const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');

const { info } = console;

async function fetching() {
    const url = 'https://www.gasengi.com/main/board.php?bo_table=commu';
    let isErrorOccured = false;
    const from = Constants.Gasengi;

    return await axios.get(url).then( async (res) => {
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
        try {
            for (let i = 1; i < 3; i++) {
                for (let j = 1; j < 6; j++) {
                    const target = `#rightcolumn > div.rank_div > div.rank_dbox > ol > span:nth-child(${i}) > li:nth-child(${j})`;
                    const $ = cheerio.load(html);
                    const link = $(target + '> a').attr('href').replace('../main','main');
                    const title = $(target + '> a').text();
                    const data = {
                        title,
                        link: 'https://www.gasengi.com/' + link,
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