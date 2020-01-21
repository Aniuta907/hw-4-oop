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
  });
};

const ham1 = new Hamburger()
  .addStuffing("salad")
  .addStuffing("cheese")
  .setSize("small");

const ham2 = new Hamburger()
  .addStuffing("potato")
  .addStuffing("cheese")
  .setSize("large");

const order = new Order().addItem(ham1).addItem(ham2);
order.getTotalCost();

console.log(order);
