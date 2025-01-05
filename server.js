var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, World from Node.js on EC2!");
    res.end();
  })
  .listen(80, () => {
    console.log("Server is running!");
  });
