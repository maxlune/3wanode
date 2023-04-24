exports.name = "Johns";
export const toto = "a";

exports.Product = function (name, price) {
  this.name = name;
  this.price = price;
};

exports.utils = {
  product: function (name, price) {},
  count: 0,
  model: {
    name: null,
    email: null,
  },
};
