const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const iconv = require('iconv-lite');
const Constants = require('../Constants');

const info = console.info;

async function fetching() {
    const url = 'https://www.instiz.net/pt/';
    let isErrorOccured = false;
    const from = Constants.Instiz;

    return await axios.get(url, { responseType: 'arraybuffer' }).then((res) => {
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
            for (let i = 10; i < 21; i += 10) {
                for (let j = 1; j < 11; j++) {
                // for (let i = 10; i < 11; i += 10) {
                    // for (let j = 1; j < 2; j++) {
                    const $ = cheerio.load(html);
                    const title = $(`#focus${j}`).text();
                    const link = $(`#focus${j}`).attr('href');
                    const data = {
                        title,
                        link: 'https:' + link,
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