const POSSIBLE_TYPES = {
  caesar: {
    price: 100,
    calories: 20
  },
  olivier: {
    price: 50,
    calories: 80
  }
};

function Salad() {
  this._type = null;
  this._weight = 0;
}

Salad.prototype = Object.create(OrderItem.prototype);

Salad.prototype.setTypes = function(size) {
  this._type = POSSIBLE_TYPESs[type];
  return this;
};

Salad.prototype.getCalories = function() {
  return (this._weight * this._type.calories) / 100;
};

Salad.prototype.getCost = function() {
  return (this._weight * this._type.price) / 100;
};
