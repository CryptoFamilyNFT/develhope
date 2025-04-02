import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log("Req received")

    response.statusCode = 200;

    response.setHeader("Content-type", "text/html");

    response.end("<html><body><h1>Server runned in node!</h1></body></html>")
})

server.listen(3000,() => {
    console.log("Server Listening on port: ", 3000)
})