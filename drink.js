function Drink(type, number) {
  this.type = type;
  this.number = number;
}

Drink.COLA = {
  type: "cola",
  price: 50,
  calories: 40
};

Drink.COFFEE = {
  type: "coffee",
  price: 80,
  calories: 20
};

Drink.prototype.getType = function() {
  return this.type;
};

Drink.prototype.getNumber = function() {
  return this.number;
};

Hamburger.prototype.calculatePrice = function() {
  return this.price * this.number;
};

Hamburger.prototype.calculateCalories = function() {
  return this.calories * this.number;
};
