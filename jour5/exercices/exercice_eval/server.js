const http = require("http");
const fs = require("fs");
const dayjs = require("dayjs");
const fr = require("dayjs/locale/fr");
dayjs.locale(fr);

require("dotenv").config();
const { APP_LOCALHOST, APP_PORT } = process.env;
const { generateUsersList } = require("./utils");
const { getUsersPage } = require("./Data/users");

const students = [
  { name: "Sonia", birth: "2019-14-05" },
  { name: "Antoine", birth: "2000-12-05" },
  { name: "Alice", birth: "1990-14-09" },
  { name: "Sophie", birth: "2001-10-02" },
  { name: "Bernard", birth: "1980-21-08" },
];

const server = http.createServer((req, res) => {
  const url = req.url.replace("/", "");
  if (url === "bootstrap") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const css = fs.readFileSync("./assets/css/bootstrap.min.css");
    res.write(css);
    res.end();

    return;
  }

  if (url === "assets/css/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const css = fs.readFileSync("./assets/css/style.css");
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
      const formData = new URLSearchParams(body);
      const name = formData.get("name");
      const birth = formData.get("birth");

      if (name && birth) students.push({ name, birth });

      res.writeHead(301, { Location: `http://${APP_LOCALHOST}:${APP_PORT}` });
      res.end();
    });
  }

  if (url === "") {
    const home = fs.readFileSync("./view/home.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(home);
  }

  if (url.startsWith("users/delete")) {
    const nameToDelete = new URL(
      `http://${APP_LOCALHOST}:${APP_PORT}${req.url}`
    ).searchParams.get("name");
    const index = students.findIndex(
      (student) => student.name === nameToDelete
    );

    if (index > -1) {
      students.splice(index, 1);
      res.writeHead(200);
      res.end("User deleted");
    } else {
      res.writeHead(404);
      res.end("User not found");
    }
    return;
  }

  if (url === "users") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const usersList = generateUsersList(students);
    const usersPage = getUsersPage(usersList);

    res.end(usersPage);
  }
});

server.listen(APP_PORT, APP_LOCALHOST, () => {
  console.log(`Server running at http://${APP_LOCALHOST}:${APP_PORT}/`);
});
