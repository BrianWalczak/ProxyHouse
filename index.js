import { createBareServer } from "@tomphttp/bare-server-node";
import express from "express";
import { createServer } from "node:http";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { join } from "node:path";
import { hostname } from "node:os";

const bare = createBareServer("/bare/");
const app = express();

app.use(express.static('client'));
app.use("/uv/", express.static(uvPath));
const server = createServer();

server.on("request", (req, res) => {
    if (bare.shouldRoute(req)) {
		bare.routeRequest(req, res);
	} else {
		app(req, res);
	}
});

server.on('upgrade', (req, socket, head) => {
	if (bare.shouldRoute(req)) {
		bare.routeUpgrade(req, socket, head);
	}else{
		socket.end();
	}
});

server.listen({
	port: process.env.PORT || 3000,
});
