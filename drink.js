const POSSIBLE_DRINK_TYPES = {
  cola: {
    price: 50,
    calories: 40
  },
  coffee: {
    price: 80,
    calories: 20
  }
};

function Drink() {
  this._type = null;
  this._quantity = 0;
}

Drink.prototype = Object.create(OrderItem.prototype);

Drink.prototype.setTypes = function(size) {
  this._type = POSSIBLE_DRINK_TYPES[type];
  return this;
};

Drink.prototype.getCalories = function() {
  return this._quantity * this._type.calories;
};

Drink.prototype.getCost = function() {
  return this._quantity * this._type.price;
};
