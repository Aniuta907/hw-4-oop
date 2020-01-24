function OrderItem() {}

OrderItem.prototype.getCalories = function() {
  return this._calories;
};

OrderItem.prototype.getCost = function() {
  return this._price;
};
