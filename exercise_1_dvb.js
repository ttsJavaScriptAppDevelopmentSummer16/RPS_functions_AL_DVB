//Exercise 1
var list = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];

list.push("fruit loops");

list.splice(list.indexOf("coffee"), list.indexOf("coffee"), "fair trade coffee");


list.splice(list.indexOf("chips"), 2, "rice", "beans");


var cart = [];

cart.push(list.pop());

cart.push(list.shift());

while(list.length != 0) {
    cart.push(list.pop());
}

cart.sort();
cart.reverse();

console.log(cart.join(" , "));