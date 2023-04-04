// Créez un dossier customer dans lequel vous créez deux fichiers utils.js et index.js,
// le fichier utils est un module permettant d'écrire le code métier.

// Dans le fichier index.js importez le code, vos fonctions par exemple, permettant de mettre les prix TTC de l'objet priceHT suivant,
// vous ajouterez le prix TTC dans le tableau priceHT.

// import

exports.priceHT = [
  { name: "Apple", priceHT: 1.0, priceTTC: null },
  { name: "Orange", priceHT: 1.2, priceTTC: null },
  { name: "Rasberry", priceHT: 2.5, priceTTC: null },
];

// Modifiez le tableau pour mettre les prix TTC

// Indications : gérez les décimales dans les prix TTC à calculer, fixez celui-ci à 2 décimales après la virgule.

exports.Utils = {
  priceTTC: function (priceHT, tva = 0.2) {
    return Math.round(priceHT * (1 + tva) * 100) / 100;
  },
};
