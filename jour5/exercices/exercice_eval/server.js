const http = require("http");
const fs = require("fs");
const dayjs = require("dayjs");
const fr = require("dayjs/locale/fr");
dayjs.locale(fr);

require("dotenv").config();
const { APP_ENV, APP_LOCALHOST, APP_PORT } = process.env;

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

    let users = "<ul class='list-group'>";
    for (const { name, birth } of students) {
      const formattedBirth = dayjs(birth).format("DD MMMM YYYY");
      users += `<li class="list-group-item d-flex justify-content-between align-items-center">
  ${name} - ${formattedBirth}
  <button class="btn btn-danger btn-sm btn-delete" onclick="deleteUser('${name}')">Supprimer</button>
  </li>`;
    }

    users += "</ul>";

    res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Liste des étudiants</title>
                    <link href="/bootstrap" rel="stylesheet" type="text/css" />
                    <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
                </head>
                <body>
                    <header>
                        <nav class="navbar navbar-light bg-light">
                            <div class="container">
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/users">Users</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>Liste des étudiants</h2>
                                ${users}
                                <p><a href="/">Retour à l'accueil</a></p>
                            </div>
                        </div>
                    </div>
                    <script>
                    function deleteUser(name) {
                      fetch("/users/delete?name=" + name, {
                        method: "DELETE",
                      }).then(function (response) {
                        if (response.ok) {
                          location.reload();
                        } else {
                          console.error("Erreur lors de la suppression de l'utilisateur");
                        }
                      });
                    }
                    </script>
                </body>    
            </html>
        `);
  }
});

server.listen(APP_PORT, APP_LOCALHOST, () => {
  console.log(`Server running at http://${APP_LOCALHOST}:${APP_PORT}/`);
});
