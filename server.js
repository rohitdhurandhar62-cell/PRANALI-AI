const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Pranali AI server is running!"
    }));
});

server.listen(3000, () => {
    console.log("Pranali server running on port 3000");
});