var Hamburger = require("./hamburger");
var Salad = require("./salad");
var Drink = require("./drink");

function Order() {
  this.orderItems = [];
  this.isPaid = false;
  this.totalCost = 0;
  this.totalCalories = 0;
}

Order.prototype.addItem = function(orderItem) {
  if (!this.isPaid) {
    this.orderItems.push(orderItem);
    console.log("You added the position", orderItem.name);
    return this;
  } else
    console.log(
      "You can't add this position because you've already paid the bill"
    );
};

Order.prototype.deleteItem = function(orderItem) {
  if (!this.isPaid) {
    this.orderItems = this.orderItems.filter(function(item) {
      return item != orderItem;
    });
    console.log("You deleted the position", orderItem.name);
    return this;
  } else
    console.log(
      "You can't delete this position because you've already paid the bill"
    );
};

Order.prototype.getOrder = function() {
  console.log(this.orderItems);
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

Order.prototype.payOrder = function(order, money) {
  this.totalCost = order.getTotalCost();

  if (!this.isPaid && money == this.totalCost) {
    this.isPaid = true;
    console.log("You paid the bill");
  } else if (!this.isPaid && money < this.totalCost) {
    console.log(
      "This money is not enough, you should pay " +
        this.totalPrice +
        " tugricov"
    );
  } else if (!this.isPaid && money > this.totalCost) {
    this.isPaid = true;
    var change = money - this.totalCost;
    console.log("You paid the bill, take your change: " + change + " tugricov");
  } else console.log("You have already paid the bill");
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

order1.payOrder(order1, 1000);

order1.deleteItem(ham1);

order1.getOrder();

console.log("cost =", order1.getTotalCost());
console.log("calories =", order1.getTotalCalories());

module.exports = Order;
