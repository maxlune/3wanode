// ## 01 Exercice rechercher un étudiant

// L'utilisateur doit proposer dans le terminal un nom d'étudiant.
// Dès que l'utilisateur a trouvé un nom dans la liste on arrête le processus d'écoute.

// La recherche sera insensible à la casse et aux espaces.

var readline = require("readline");

const students = ["Alan", "Sonia", "Sophie"];

rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("Etudiant > ");
rl.prompt();

rl.on("line", function (line) {
  const student = line.trim().toLowerCase();
  if (students.map((student) => student.toLowerCase()).includes(student)) {
    console.log("WIN");
  } else {
    console.log("LOSE");
  }
  rl.prompt();
}).on("close", function () {
  console.log("Have a great day !");
  process.exit(0);
});
