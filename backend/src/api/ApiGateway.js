const crawl = require('../crawl');
const PreProcessor = require('../PreProcessor');
const cors = require('cors');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');
const SelectorOfPostLinks = require('../Crawl/SelectorOfPostLinks');

const addressBook = {
	getTempList: '/getTempList',
	getTargetSiteList: '/getTargetSiteList',
	alive: '/alive',
};

function gate(app) {
	app.use(cors()); // CORS setting

	app.post(addressBook.getTempList, (req, res) => {
		const { auth } = req.headers;
		if (auth === '1743511') {
			inPutLogger(addressBook.getTempList);
			prisma
				.preProcessedPosts()
				.then(e => {
					res.status(200).send(e);
				})
				.then(outPutLogger(res.status));
		} else {
			return res.status(404);
		}
	});

	app.post(addressBook.getTargetSiteList, (req, res) => {
		const { auth } = req.headers;

		if (auth === '1743511') {
			inPutLogger(addressBook.getTargetSiteList);

			const targetList = SelectorOfPostLinks.targetList.map(e => {
				const param = {};
				param.from = e.from;
				param.link = e.link;
				return param;
			});

			res.status(200).send(targetList);
			outPutLogger(res.status);
		} else {
			return res.status(404);
		}
	});

	app.get(addressBook.alive, (req, res) => {
		inPutLogger(addressBook.alive);
		res.status(200).send("yes i'm alive yet..?");
	});

	// crawl
	// app.get('/crawl', (req, res) => {
	// 	crawl
	// 		.init()
	// 		.then(result => {
	// 			res.status(200).send(`SUCCESS:  ${result}`);
	// 		})
	// 		.catch(err => {
	// 			res.status(502).send(`ERROR :  ${err}`);
	// 			throw err;
	// 		});
	// 	res.status('i received');
	// });

	app.listen(80, function() {
		console.log('CORS-enabled web server listening on port 80');
	});
}

// loggers
function outPutLogger(data) {
	return console.info('[£OUTPUT_LOG] : ', data);
}

function inPutLogger(data) {
	return console.info('[#INPUT_LOG] : ', data);
}

module.exports = {
	gate,
	outPutLogger,
	inPutLogger,
};
