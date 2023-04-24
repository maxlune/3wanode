// renseigner localhost etc
const fs = require("fs"),
  http = require("http");

http
  .createServer(function (req, res) {
    // Path vers le répertoire :
    fs.readFile(__dirname + req.url, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }

      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8000);
