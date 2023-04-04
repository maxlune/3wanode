const { Utils, priceHT } = require("./utils");

priceHT.forEach((x) => {
  x.priceTTC = Utils.priceTTC(x.priceHT);
});

console.log(priceHT);
