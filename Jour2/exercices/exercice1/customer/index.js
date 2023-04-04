const { Utils, priceHT } = require("./utils");

priceHT.forEach((item) => {
  item.priceTTC = Utils.priceTTC(item.priceHT);
});

console.log(priceHT);
