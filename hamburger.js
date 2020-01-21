const POSSIBLE_STUFFINGS = {
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

const POSSIBLE_SIZES = {
  large: {
    price: 100,
    calories: 40
  },
  small: {
    price: 50,
    calories: 20
  }
};

function Hamburger() {
  this._calories = 0;
  this._price = 0;
  this._size = null;
  this._quantity = 0;
}

Hamburger.prototype = Object.create(OrderItem.prototype);

Hamburger.prototype.setSize = function(size) {
  this._size = POSSIBLE_SIZES[size];
  return this;
};

Hamburger.prototype.addStuffing = function(stuffing) {
  this._calories += POSSIBLE_STUFFINGS[stuffing].calories;
  this._price += POSSIBLE_STUFFINGS[stuffing].price;
  return this;
};

Hamburger.prototype.getCost = function() {
  return this._quantity * (this._size.price + this._price);
};
