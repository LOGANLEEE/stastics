const { GraphQLServer } = require('graphql-yoga');
let fs = require('fs');
// const rootCas = require('ssl-root-cas/latest').create();

// default for all https requests
// (whether using https directly, request, or another module)
// require('https').globalAgent.options.ca = rootCas;
require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();


const { info } = console;
const { prisma } = require('../generated/prisma-client');
const Query = require('./resolvers/Query');
const crawl = require('./crawl');
const preProcessor = require('./preProcessor');


const resolvers = {
    Query
}


const server = new GraphQLServer({
    typeDefs: './src/graphql/Schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    }
})

// setInterval(() => {
//     info(`=================`);
//     Crawl.init(),  10000// 10s
// });

info(`=================`);
crawl.init();// 10s
// preProcessor.exec();



server.express.get('/crawl', (req, res) => {

    Crawl.init().then((result) => {
        res.status(200).send(`SUCCESS:  ${result}`);
    }).catch(err => {
        res.status(502).send(`ERROR :  ${err}`);
        throw err;
    });
});

// server.express.post('/', (req, res) => {
//     return res.send('Received a POST HTTP method');
// });

// server.express.put('/', (req, res) => {
//     return res.send('Received a PUT HTTP method');
// });

// server.express.delete('/', (req, res) => {
//     return res.send('Received a DELETE HTTP method');
// });
const keyPath = 'key.pem';
const certPath = 'server.crt';

const options = {
    port: 4001,
    https: {
        key: fs.readFileSync(keyPath, 'utf8'),
        cert: fs.readFileSync(certPath, 'utf8')
    }
};

server.start(options, () => info(`Server is running on ${options.port}`))