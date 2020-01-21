function Hamburger(size, stuffing, number) {
  this.size = size;
  this.stuffing = stuffing;
  this.number = number;
}

Hamburger.SIZE_SMALL = {
  size: "small",
  price: 50,
  calories: 20
};

Hamburger.SIZE_LARGE = {
  size: "large",
  price: 100,
  calories: 40
};

Hamburger.STUFFING_CHEESE = {
  stuffing: "cheese",
  price: 10,
  calories: 20
};

Hamburger.STUFFING_SALAD = {
  stuffing: "salad",
  price: 20,
  calories: 5
};

Hamburger.STUFFING_POTATO = {
  stuffing: "potato",
  price: 15,
  calories: 10
};

Hamburger.prototype.getSize = function() {
  return this.size;
};

Hamburger.prototype.getStuffing = function() {
  return this.stuffing;
};

Hamburger.prototype.addCheese = function(amount) {
  return (this.cheese += amount);
  return this;
};

Hamburger.prototype.addSalad = function(amount) {
  return (this.salad += amount);
  return this;
};

Hamburger.prototype.addPotato = function(amount) {
  return (this.potato += amount);
  return this;
};

Hamburger.prototype.getNumber = function() {
  return this.number;
};

Hamburger.prototype.calculatePrice = function() {
  return this.price;
};

Hamburger.prototype.calculateCalories = function() {
  return this.calories;
};
