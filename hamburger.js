var OrderItem = require("./orderItem");

var POSSIBLE_STUFFINGS = {
  cheese: {
    price: 10,
    calories: 20
  },
  salad: {
    price: 20,
    calories: 5
  },
  potato: {
    price: 15,
    calories: 10
  }
};

var POSSIBLE_SIZES = {
  large: {
    price: 100,
    calories: 40
  },
  small: {
    price: 50,
    calories: 20
  }
};

function Hamburger(quantity) {
  this.name = "hamburger";
  this._stuffingCalories = 0;
  this._stuffingPrice = 0;
  this._size = null;
  this._quantity = quantity;
}

Hamburger.prototype = Object.create(OrderItem.prototype);

Hamburger.prototype.setSize = function(size) {
  this._size = POSSIBLE_SIZES[size];
  return this;
};

Hamburger.prototype.addStuffing = function(stuffing) {
  this._stuffingCalories += POSSIBLE_STUFFINGS[stuffing].calories;
  this._stuffingPrice += POSSIBLE_STUFFINGS[stuffing].price;
  return this;
};

Hamburger.prototype.getCost = function() {
  return this._quantity * (this._size.price + this._stuffingPrice);
};

Hamburger.prototype.getCalories = function() {
  return this._quantity * (this._size.calories + this._stuffingCalories);
};

module.exports = Hamburger;
