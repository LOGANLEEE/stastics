const crawl = require('../crawl');
const preProcessor = require('../preProcessor');
const cors = require('cors');
const { prisma } = require('../../generated/prisma-client');

function gate(app) {
	app.use(cors()); // CORS setting

	app.post('/init', (req, res) => {
		const { auth } = req.headers;
		console.info('£££ gate :', auth, auth === '1743511');
		if (auth === '1743511') {
			return prisma.tempPosts().then(e => {
				return res.status(200).send(e);
			});
		} else {
			return res.status(404);
		}
	});

	app.get('/alive', (req, res) => {
		console.info('£££ alive');
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

module.exports = {
	gate,
};
