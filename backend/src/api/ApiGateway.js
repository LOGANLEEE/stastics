const crawl = require('../crawl');
const preProcessor = require('../preProcessor');
const cors = require('cors');
const { prisma } = require('../../generated/prisma-client');
const Constants = require('../Constants');

const addressBook = { getTempList: '/getTempList', getTargetSiteList: '/getTargetSiteList', alive: '/alive' };

function gate(app) {
	app.use(cors()); // CORS setting

	app.post(addressBook.getTempList, (req, res) => {
		const { auth } = req.headers;
		if (auth === '1743511') {
			inPutLogger(addressBook.getTempList);
			prisma
				.tempPosts()
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
			res.status(200).send(Constants.targetList);
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
