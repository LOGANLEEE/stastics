const { GraphQLServer } = require('graphql-yoga');
const fs = require('fs');
const Init = require('./Init');
// const rootCas = require('ssl-root-cas/latest').create();

// default for all https requests
// (whether using https directly, request, or another module)
// require('https').globalAgent.options.ca = rootCas;
require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();

const { info } = console;
const { prisma } = require('../generated/prisma-client');
const Query = require('./resolvers/Query');

const ApiGateway = require('./api/ApiGateway');
const resolvers = {
	Query,
};

const app = new GraphQLServer({
	typeDefs: './src/graphql/Schema.graphql',
	resolvers,
	context: request => {
		return {
			...request,
			prisma,
		};
	},
});
const { express } = app;
ApiGateway.gate(express);

Init.start();

const keyPath = 'key.pem';
const certPath = 'server.crt';

const options = {
	port: 4001,
	https: {
		key: fs.readFileSync(keyPath, 'utf8'),
		cert: fs.readFileSync(certPath, 'utf8'),
	},
};

app.start(options, () => info(`Server is running on ${options.port}`));
