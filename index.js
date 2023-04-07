const createServer = require('@tomphttp/bare-server-node');
const http = require('http');
const nodeStatic = require('node-static');


const bare =  createServer('/bare/');
const serve = new nodeStatic.Server('client/');

const server = http.createServer();

server.on('request', (req, res) => {
    if (bare.shouldRoute(req)) {
		bare.routeRequest(req, res);
	} else {
		serve.serve(req, res);
	}
});

server.on('upgrade', (req, socket, head) => {
	if (bare.shouldRoute(req, socket, head)) {
		bare.routeUpgrade(req, socket, head);
	}else{
		socket.end();
	}
});

server.listen({
	port: process.env.PORT || 3000,
});