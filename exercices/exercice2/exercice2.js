// 1. Lisez le fichier à l'aide de la méthode asynchrone.
// 1.(bis) Pour la suite utilisez l'approche synchrone afin de récupérer les données que vous pourrez exploiter par la suite dans le script.
// 2. Recherchez dans le tableau tous les étudiants qui ont eu plus de 17 de moyenne strictement.
// 3. Recherchez dans le tableau l'étudiant qui a eu la meilleur node.
// 4. Récupérez les données dans un objet student, puis ajoutez chaque étudiant dans un tableau students.
// 5. Ordonnez maintenant l'ensemble des données dans le tableau.

// BONUS

// 6. Ajoutez dans le fichier students.txt les étudiants suivants :
// - 18 Sonia Paris
// - 17 Clarisse Marseille
// 7. Lire le fichier lui-même et mettez chaque nom en majuscule

const fs = require("fs");

const newStudents = "18 Sonia Paris\n17 Clarisse Marseille\n";

try {
  const data = fs.readFileSync("students.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}

fs.readFile("students.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const students = [];

  const lines = data.split("\n");
  lines.forEach((line) => {
    if (line) {
      const [grade, name] = line.split(" ");
      const parsedGrade = parseFloat(grade);
      if (parsedGrade > 17) {
        students.push({ name, grade: parsedGrade });
      }
    }
  });

  students.sort((a, b) => b.grade - a.grade);

  console.log(students);

  const bestStudent = students.reduce((previous, current) => {
    return previous.grade > current.grade ? previous : current;
  });

  console.log(`Le meilleur étudiant : ${bestStudent.name}`);

  fs.appendFile("students.txt", newStudents.toUpperCase(), (err) => {
    if (err) throw err;
    console.log("Saved!");
  });
});
