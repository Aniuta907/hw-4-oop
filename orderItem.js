function OrderItem() {
  this._calories = 0;
  this._price = 0;
}

OrderItem.prototype.getCalories = function() {
  return this._calories;
};

OrderItem.prototype.getCost = function() {
  return this._price;
};
