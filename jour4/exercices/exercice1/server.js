const http = require("http");
const fs = require("fs");
const hostname = "localhost";
const port = 8000;

const students = [{ name: "Sonia" }, { name: "Antoine" }]
  .map((student) => `<li>${student.name}</li>`)
  .join(" ");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./view/home.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(JSON.stringify({ error: "File not found" }));
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
    return;
  }

  if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Utilisateurs</title>
          </head>
          <body>
            <h1>Utilisateurs :</h1>
            <ul>${students}</ul>
          </body>
        </html>
        `);
    return;
  }

  if (req.url === "/bootstrap") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const css = fs.readFileSync("./assets/css/bootstrap.min.css");
    res.write(css);
    res.end();
    return;
  }

  if (req.method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });

    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ result: body }));
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
