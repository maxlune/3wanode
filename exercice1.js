// 1. Créer un petit jeu en console : on doit deviner un nombre compris entre 1 et 100.
// Si l'utilisateur propose un nombre plus petit on lui indique qui l'est plus grand et réciproquement.

// 2. L'utilisateur à 10 tentatives pour deviner le nombre caché, après le jeu s'arrête.
// Si l'utilisateur trouve le nombre avant cette borne, le jeu s'arrête également.

// 3. Pensez à gérer également les erreurs de saisi dans le jeu.

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

console.log("Devinez un nombre entre 1 et 100.");

process.stdin.on("data", (input) => {
  const userGuess = parseInt(input);

  if (userGuess >= 1 && userGuess <= 100) {
    if (userGuess === secretNumber) {
      console.log("Vous avez trouvé le nombre secret !");
      process.exit();
    } else {
      attempts -= 1;

      if (attempts === 0) {
        console.log(`Perdu. Le nombre secret était ${secretNumber}.`);
        process.exit();
      } else {
        console.log(
          "Le nombre secret est " +
            (userGuess < secretNumber ? "plus grand" : "plus petit") +
            "."
        );
        console.log(`Il reste ${attempts} tentatives.`);
      }
    }
  } else {
    console.log("Veuillez entrer un nombre entre 1 et 100.");
  }
});

// CORRECTION

// let count = 0;

// process.stdout.write(
//   "Vous devez choisir un nombre compris entre 1 et 100 pour trouver le nombre en or !"
// );

// process.stdin.on("data", (chunk) => {
//   const number = parseInt(chunk);
//   const goldNumber = 42;

//   count++;

//   if (isNaN(number) === true) {
//     process.stdout.write("UN NOMBRE !");
//   }

//   if (count >= 10) {
//     process.stdout.write("Vous avez dépasser les 10 tentatives");
//   }

//   if (number > goldNumber) {
//     process.stdout.write(`Le nombre en or est plus petit que ${number}`);
//   } else if (number < goldNumber) {
//     process.stdout.write(`Le nombre en or est plus petit que ${number}`);
//   } else {
//     process.stdout.write(
//       `Vous avez trouvé en ${count} tentatives le nombre ${goldNumber}`
//     );
//     process.exit(0);
//   }
// });
