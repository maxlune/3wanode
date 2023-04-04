// ## 02 Exercice rechercher dans un fichier TP 01

// 1. Vous allez lire un fichier puis calculer la moyenne de chaque étudiant.
// Afficher le nom de l'étudiant, puis donner sa moyenne.
// Récupérer les données dans le dossier Data le fichier students.json.

// 2. Pensez à gérer le cas où l'on souhaite arrêter le processus.
// Ainsi que le fait que la recherche doit être insensible à la casse.

// 3. Gérez les exceptions/erreurs de saisi.

const fs = require("fs");
const readline = require("readline");

const studentsData = JSON.parse(
  fs.readFileSync("./Data/students.json")
).students;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Etudiant moyenne > ");
rl.prompt();

rl.on("line", (line) => {
  const student = studentsData.find(
    (student) => student.name.toUpperCase() === line.trim().toUpperCase()
  );

  if (student) {
    const sum = student.notes.reduce((total, grade) => total + grade, 0);
    const average = sum / student.notes.length;
    console.log(`La moyenne de ${student.name} est ${average}`);
  } else {
    console.log("L'étudiant n'existe pas");
  }

  rl.prompt();
}).on("close", () => {
  console.log("Have a great day !");
  process.exit(0);
});
