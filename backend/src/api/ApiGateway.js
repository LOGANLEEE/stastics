const crawl = require('../crawl');
const preProcessor = require('../preProcessor');
const cors = require('cors');

function gate(app) {
	app.use(cors()); // CORS setting

	app.get('/test', (req, res) => {
		return res.send('ive got it');
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
