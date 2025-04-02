import { createServer } from "node:http";

const PORT = 3000
const server = createServer((request, response) => {
    console.log("Req received")

    response.statusCode = 200;

    response.setHeader("Content-type", "applicaction/json");

    const jsonResponse = JSON.stringify({location: "mars"});

    response.end(jsonResponse)
})

server.listen(PORT,() => {
    console.log(`Server Listening on: http://localhost:${PORT}`)
})