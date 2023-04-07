// 04. Vous devez ré-organiser le HTML ci-après en utilisant un layout Pug.

// La page suivante représente la page d'accueil d'un portfolio.
// Créez un fichier de layout prenant en compte les éléments suivants :

// - Le menu doit être placé dans un fichier menu.pug et inclus dans le layout avec un include
// - Le menu s'affiche en bouclant sur l'objet suivant, lequel se trouve dans le programme Node.js :
// const menuItems = [
//   { path: "/", title: "Home", isActive: true },
//   { path: "/about-me", title: "About", isActive: false },
//   { path: "/references", title: "References", isActive: false },
//   { path: "/contact-me", title: "Contact", isActive: false },
// ];

// - Le contenu à l'intérieur de <main> doit pouvoir changer d'une page à l'autre (utilisez un block nommé)
// - Les éléments de script propre à chaque page doivent être placés à la fin du <body>
// - Le footer se trouve dans un fichier footer.pug, et inclus dans le layout avec un include

// Modèle HTML :

// <!DOCTYPE html>
// <html lang="fr">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <header>
//         <nav>
//             <ul>
//                 <li class="nav-active"><a href="/">Home</a></li>
//                 <li><a href="/about-me">About</a></li>
//                 <li><a href="/references">References</a></li>
//                 <li><a href="/contact-me">Contact</a></li>
//             </ul>
//         </nav>
//     </header>

//     <main>
//         <div class="container">
//             <h1>Jean DUPONT</h1>
//             <p>Bienvenue sur mon portfolio</p>
//             <p>Contactez-moi à l'adresse email suivante :</p>
//             <output id="generate-email"></output>
//         </div>
//     </main>

//     <script>
//         // Ce script est uniquement sur cette page
//         (function preventSpam() {
//             const b64encodedEmail = 'amVhbi5kdXBvbnRAZ21haWwuY29t';
//             document.getElementById('generate-email').textContent = atob(b64encodedEmail);
//         })();
//     </script>

//     <footer>
//         <ul>
//             <li><a href="#">Mentions légales</a></li>
//             <li><a href="#">CGU</a></li>
//             <li><a href="#">Réclamations</a></li>
//         </ul>
//     </footer>

// </body>
// </html>

const pug = require("pug");
const menuItems = [
  { path: "/", title: "Home", isActive: true },
  { path: "/about-me", title: "About", isActive: false },
  { path: "/references", title: "References", isActive: false },
  { path: "/contact-me", title: "Contact", isActive: false },
];

const indexHtml = pug.renderFile("layout.pug", { menuItems, pretty: true });

console.log(indexHtml);
