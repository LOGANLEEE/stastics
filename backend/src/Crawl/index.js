const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');
const preProcessor = require('../preProcessor');

const Clien = require('./Clien');
const Bobae = require('./Bobae');
const Bullpen = require('./Bullpen');
const Ilbe = require('./Ilbe');
const Etoland = require('./Etoland');
const SLR = require('./SLR');
const TodayHumor = require('./TodayHumor');
const Cook = require('./Cook');
const Gasengi = require('./Gasengi');
const RuliWeb = require('./RuliWeb');
const PpomPu = require('./PpomPu');
const Instiz = require('./Instiz');
const TheQoo = require('./TheQoo');
const FmKorea = require('./FmKorea');
const DogDrip = require('./DogDrip');
const HumorUniv = require('./HumorUniv');

const { info } = console;


// DCinside // TODO
// NATEPANN // TODO
// YGOSU // TODO
// DDANZI // TODO
// HumorUniv.fetching(); // not working
// const siteList = [Clien, Bobae, Bullpen, Etoland, SLR, TodayHumor, Cook, Gasengi, RuliWeb, PpomPu, Instiz, TheQoo, FmKorea, DogDrip];
const siteList = [Instiz];


// DONE
// const siteList = [Etoland, Clien, Bobae, SLR, Bullpen, TodayHumor, Cook, Gasengi, RuliWeb, TheQoo, FmKorea];



// TODO 
// ILBE, DogDrip, HumorUniv, PpomPu

function init() {
    info("£££ Crawler Init ");
    const resultList = [];

    try {
        siteList.map((site, idx) => {
            site.fetching().then(value => {
                info(`£££ ${idx} Is ${value.from}  has Error? :  ${value.isErrorOccured}`);
                resultList.push(value);
                if (resultList.length === siteList.length) {
                    preProcessor.exec();
                }
            }).catch(err => { throw err });
        });
    } catch (e) {
        throw e;
    }

};


module.exports = {
    init,
};