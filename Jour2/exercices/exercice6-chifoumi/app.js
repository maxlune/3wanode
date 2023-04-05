// ## 03 Créez le jeu Chifoumi en console TP 02

// ### Partie à faire pour tout le monde

// Cet exercice est libre, vous devez implémenter le jeu Chifoumi avec les connaissances que nous avons d'aborder.
// Utilisez readline.

// Le jeu du Chifoumi se fera avec deux joueurs créés de manière automatique, par le script.

// Affichez une fois le jeu terminé les points gagnés par chaque joueur ainsi que le gagnant de la partie.

// ### Partie optionnelle Challenge

// Pensez à relancer le jeu en console et à réinitialiser les résultats pour continuer à jouer.

// Fait avec Lika
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choices = ["pierre", "papier", "ciseaux"];

function getRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(player1, player2) {
  if (player1 === player2) {
    return "draw";
  }

  if (
    (player1 === "pierre" && player2 === "ciseaux") ||
    (player1 === "papier" && player2 === "pierre") ||
    (player1 === "ciseaux" && player2 === "papier")
  ) {
    return "player1";
  } else {
    return "player2";
  }
}

let player1Score = 0;
let player2Score = 0;

function playGame() {
  const player1 = getRandomChoice();
  const player2 = getRandomChoice();

  console.log(`Joueur 1: ${player1}`);
  console.log(`Joueur 2: ${player2}`);

  const winner = getWinner(player1, player2);

  if (winner === "draw") {
    console.log("Match nul !");
  } else {
    console.log(`Le gagnant est le ${winner}`);
    if (winner === "player1") {
      player1Score++;
    } else {
      player2Score++;
    }
  }

  console.log(`Score Joueur 1: ${player1Score}`);
  console.log(`Score Joueur 2: ${player2Score}`);

  rl.question("Voulez-vous rejouer ? (oui/non) > ", (answer) => {
    if (answer.trim().toLowerCase() === "oui") {
      playGame();
    } else {
      console.log("GG à tous !");
      rl.close();
    }
  });
}

console.log("Bienvenue dans le jeu Chifoumi !");
playGame();
