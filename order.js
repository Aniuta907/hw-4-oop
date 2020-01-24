function Order() {
  this.orderItems = [];
  this.isPaid = false;
}

Order.prototype.addItem = function(orderItem) {
  this.orderItems.push(orderItem);
  return this;
};

Order.prototype.payOrder = function() {
  this.isPaid = true;
};

Order.prototype.getTotalCost = function() {
  return this.orderItems.reduce(function(totalCost, orderItem) {
    return totalCost + orderItem.getCost();
  }, 0);
};

Order.prototype.getTotalCalories = function() {
  return this.orderItems.reduce(function(totalCalories, orderItem) {
    return totalCalories + orderItem.getCalories();
  }, 0);
};

const ham1 = new Hamburger(1)
  .addStuffing("salad")
  .addStuffing("cheese")
  .setSize("small");

const ham2 = new Hamburger(2)
  .addStuffing("potato")
  .addStuffing("cheese")
  .setSize("large");

const salad1 = new Salad(200).setType("caesar");
const salad2 = new Salad(300).setType("olivier");
const order1 = new Order()
  .addItem(salad1)
  .addItem(salad2)
  .addItem(ham1)
  .addItem(ham2);

console.log(order1);

console.log("cost = ", order1.getTotalCost());
console.log("calories = ", order1.getTotalCalories());
