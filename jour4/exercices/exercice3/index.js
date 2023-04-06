// 03. Dans un template, utiliser l'objet JS suivant et passez-le à un template .pug :
// const loggedUser = {
//   name: {
//     first: "Jean",
//     last: "Dupont",
//   },
//   age: 36,
//   birthdate: new Date("1986-04-18"),
//   location: {
//     zipcode: "77420",
//     city: "Champs-sur-Marne",
//   },
//   isAdmin: true,
// };

// Le HTML généré devra être le suivant :
// <div class="user-card">
//   <h4>
//     Jean DUPONT <small>(36 ans)</small>
//   </h4>
//   <p>Né le 18/04/1986</p>
//   <p>
//     Vit à <strong>Champs-sur-Marne, 77420</strong>
//   </p>
//   <span class="badge-admin">Est administrateur</span>
// </div>;

// Astuce: Afin d'obtenir un résultat visuel correctement indenté en HTML,
// vous pouvez passer l'option { pretty: true } à renderFile et compileFile.
// Attention, cette option n'est pas recommandée en production, mais nous l'utiliseront ici
// pour vérifier le résultat des exercice

const http = require("http");
const pug = require("pug");
const path = require("path");

const port = 8000;

const loggedUser = {
  name: {
    first: "Jean",
    last: "Dupont",
  },
  age: 36,
  birthdate: new Date("1986-04-18"),
  location: {
    zipcode: "77420",
    city: "Champs-sur-Marne",
  },
  isAdmin: true,
};

const pugOptions = {
  filename: path.join("views", "template.pug"),
  pretty: true,
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    pugOptions.loggedUser = loggedUser;
    const userCardHTML = pug.renderFile(pugOptions.filename, pugOptions);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(userCardHTML);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page not found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
