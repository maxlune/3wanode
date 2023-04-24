const pug = require("pug");

// Compile

const template = `
if age >= 18
  h1 Access granted!
else
  h1 Permission denied!`;

// const compileTemplate = pug.compile(template);
// const result = compileTemplate({ age: 1 });

// const compileTemplate = pug.compileFile("./views/template.pug");
// const result = compileTemplate({ age: 18 });
// console.log(result);

// Render
// pug.render(template, { age: 18 }, (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// RenderFile pour un fichier externe pug
// pug.renderFile("./views/template.pug", { age: 18 }, (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Gestion erreur compile

try {
  const compileTemplate = pug.compile(template);
  // ...
} catch (err) {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end(err.message);
}

// Syntaxe de pug

const compileTemplate3 = pug.compileFile("cours.pug");

const data = {
  name: "Norbert",
  age: 33,
  gender: "M",
};

compileTemplate3(data);
