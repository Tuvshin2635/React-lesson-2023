console.log("day 50 Express server");

const http = require("http");

const PORT = 8000;

const server = http.createServer((reques, resonse) => {
  resonse.statusCode = 200;
  resonse.setHeader("content-type", "text/plan");

  resonse.end("Hello worldoo\n");
});

server.listen(PORT, () => {
  console.log(`server is runnig http://localhost:${PORT}`);
});
