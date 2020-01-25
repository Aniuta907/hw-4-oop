var POSSIBLE_TYPES = {
  caesar: {
    price: 100,
    calories: 20
  },
  olivier: {
    price: 50,
    calories: 80
  }
};

function Salad(weight) {
  this.name = "salad";
  this._type = null;
  this._weight = weight;
}

Salad.prototype = Object.create(OrderItem.prototype);

Salad.prototype.setType = function(type) {
  this._type = POSSIBLE_TYPES[type];
  return this;
};

Salad.prototype.getCalories = function() {
  return (this._weight * this._type.calories) / 100;
};

Salad.prototype.getCost = function() {
  return (this._weight * this._type.price) / 100;
};
