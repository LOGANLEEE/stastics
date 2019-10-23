const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const iconv = require('iconv-lite');
const Constants = require('../Constants');

const info = console.info;

async function fetching() {
    const url = 'http://www.etoland.co.kr/bbs/board.php?bo_table=hit';
    let isErrorOccured = false;
    const from = Constants.Etoland;

    return await axios.get(url, { responseType: 'arraybuffer' }).then(res => {
        if (res.status === 200) {
            const result = iconv.decode(res.data, 'euc-kr');
            return Processor(result);
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
        // 8~126 even numbers.
        try {
            for (let i = 8; i < 127; i += 2) {
                const target = `#fboardlist > table > tbody > tr:nth-child(${i})`;
                const $ = cheerio.load(html);
                const title = $(target + '> td.mw_basic_list_subject > a:nth-child(3) > span').text();
                const link = $(target + '> td.mw_basic_list_subject > a:nth-child(3)').attr('href');
                const time = $(target + '> td.mw_basic_list_datetime').text();
                const author = $(target + '> td:nth-child(3) > nobr > a > span').text();
                const hitCount = $(target + '> td.mw_basic_list_hit').text();
                const data = {
                    title,
                    author,
                    link: 'http://www.etoland.co.kr/' + link.replace('../', ''),
                    hitCount: parseInt(hitCount),
                    registeredAt: time,
                    from,
                };
                await prisma.createPrePost(data);
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
        return new Promise((resolve, reject) => {
            resolve({ from, isErrorOccured });
            reject({ from, isErrorOccured });
        });
    }
}

module.exports = {
    fetching
}