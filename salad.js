function Salad(type, weight) {
  this.type = type;
  this.weight = weight;
}

Salad.CAESAR = {
  type: "caesar",
  price: 100,
  calories: 20
};

Salad.OLIVIER = {
  type: "olivier",
  price: 50,
  calories: 80
};

Salad.prototype.getType = function() {
  return this.type;
};

Salad.prototype.getWeight = function() {
  return this.weight;
};

Salad.prototype.calculatePrice = function() {
  return (this.weight * this.price) / 100;
};

Salad.prototype.calculateCalories = function() {
  return (this.weight * this.calories) / 100;
};
