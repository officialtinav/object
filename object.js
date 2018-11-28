var newPizza = {}
//add property and value
newPizza["name"] = "The Jordan"
newPizza["price"] = 999.99;
newPizza["toppings"] = ["pineapple","balut","gold","chicken","the unknown","depression"]

//output a random topping to the screen

var choose = (Math.floor(Math.random() * newPizza.toppings.length));
window.alert(newPizza.toppings[choose]);