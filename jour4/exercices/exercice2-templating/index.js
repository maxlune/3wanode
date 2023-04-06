// 01. Écrire un script Node.js qui implémente renderFile et qui permet de rendre le template suivant.
// L'objet user passé au template doit contenir la valeur suivante : { isAdmin: true }
// if user.isAdmin
//     h1 Access granted
// else
//     h1 You must be logged as an administrator!

// (Vérifiez que le résultat du rendu change bien si vous passez isAdmin à false)

// 02. Ré-écrire le même programme en utilisant cette fois la méthode compileFile.

const pug = require("pug");

// pug.renderFile(
//   "./views/template.pug",
//   { user: { isAdmin: true } },
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

try {
  const compileTemplate = pug.compileFile("./views/template.pug");
  const result = compileTemplate({ user: { isAdmin: true } });
  console.log(result);
} catch (err) {
  console.log("Erreur lors de la compilation :\n");
  console.log(err.message);
}
