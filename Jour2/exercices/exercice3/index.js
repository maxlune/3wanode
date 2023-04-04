// # 00 Exercice mentions

// Installez un nouveau projet, définissez à l'aide des variables d'environnement les données suivantes :

// - Une mention "assez bien" si sa moyenne est égale ou supérieure à 12/20 et inférieure à 14/20.
// - Une mention "bien" si sa moyenne est au moins égale à 14/20 et inférieure à 16/20.
// - Une mention "très bien" s'il obtient une moyenne égale ou supérieure à 16/20.

// Utilisez les étudiants suivants et définissez les labels "Assez bien", "Bien", "Très bien" et "Passable" des mentions de chaque étudiant

require("dotenv").config();

const PASSABLE = parseInt(process.env.PASSABLE);
const GOOD_ENOUGH = parseInt(process.env.GOOD_ENOUGH);
const GOOD = parseInt(process.env.GOOD);
const VERY_GOOD = parseInt(process.env.VERY_GOOD);

const students = [
  { name: "ALAN", note: "11", address: "Paris", mention: null },
  { name: "ALICE", note: "17", address: "Paris", mention: null },
  { name: "SOHPHIE", note: "20", address: "Paris", mention: null },
  { name: "SONIA", note: "17", address: "Toulon", mention: null },
  { name: "ANTOINE", note: "18", address: "Aubenas", mention: null },
  { name: "BERNARD", note: "19", address: "Paris", mention: null },
  { name: "ALAN", note: "14", address: "Aubenas", mention: null },
  { name: "SONIA", note: "18", address: "Paris", mention: null },
  { name: "CLARISSE", note: "17", address: "Marseille", mention: null },
];

students.forEach((student) => {
  const note = parseInt(student.note);

  student.mention =
    note >= VERY_GOOD
      ? "Très bien"
      : note >= GOOD
      ? "Bien"
      : note >= GOOD_ENOUGH
      ? "Assez bien"
      : note >= PASSABLE
      ? "Passable"
      : "No mention";
});

console.log(students);
