// ## 01 Exercice Shuffle

// Configurez un nouveau projet dans le dossier Exercices. Et utilisez les données suivantes :

// Créez un module utils dans un dossier src, dans ce fichier créez un algorithme qui mélange les users.
// Puis définissez un serveur Node.js natif, comme on a vu dans ce cours, et utilisez deux routes :
// la route racine qui affichera une page HTML avec la liste des users (voir les données ci-dessous) et
// la route shuffle qui mélangera les utilisateurs.

// Remarque : dans le fichier package.json et dans la partie scripts, vous pouvez définir une commande
// start exécutable pour lancer le serveur :

// {
//   "name": "shuffle",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "start": "nodemon server.js"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }

// Pour lancer ce script vous devez utiliser l'option de commande run de npm :

// npm run start

const http = require("http");
const { shuffle } = require("./src/utils");
const hostname = "localhost";
const port = 8000;

require("dotenv").config();
const users = process.env.USERS.split(",");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    const userList = users.map((user) => `<li>${user}</li>`).join("");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Page d'accueil</title>
        </head>
        <body>
          <h1>Liste des utilisateurs</h1>
          <ul>${userList}</ul>
          <p><a href="/shuffle">Mélanger les utilisateurs</a></p>
        </body>
      </html>
    `);
  } else if (url === "/shuffle") {
    const shuffledUsers = shuffle(users);
    const userList = shuffledUsers.map((user) => `<li>${user}</li>`).join("");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Page de shuffle</title>
        </head>
        <body>
          <h1>Utilisateurs mélangés</h1>
          <ul>${userList}</ul>
          <p><a href="/">Retour à la liste des utilisateurs</a></p>
        </body>
      </html>
    `);
  }
});

server.listen(port, hostname, () => {
  console.log(`Serveur running at http://${hostname}:${port}/`);
});
