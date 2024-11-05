//Variable declarations
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

const X = vegetarian;
const Y = hawaiian;
const Z = pepperoni;

//Greeting the customer and showing the menu
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${X}, ${Y} and ${Z}.`
);

//Saving the ordered pizza in orderName
const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);

//Checking if the pizza is on the menu
if (!checkOrderName(orderName)) {
  alert("Sorry, that pizza is not on our menu.");
} else {
  //saving number of pizzas ordered
  const orderQuantity = parseInt(
    prompt(`How many of ${orderName} do you want?`)
  );

  //Check if the quantity is a valid number
  if (isNaN(orderQuantity) || orderQuantity <= 0) {
    alert("Please enter a valid number of pizzas.");
  } else {
    //Calculate final price and cooking time
    const orderTotal = totalCost(orderQuantity);
    const timeNeeded = cookingTime(orderQuantity);

    //Informing the customer about the final price and cooking time
    alert(
      `Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizzas will take ${timeNeeded} minutes.`
    );
  }
}

//FUNCTIONS

//Function to check if the chosen pizza is on the menu
function checkOrderName(orderName) {
  const lowerOrderName = orderName.toLowerCase();
  return (
    lowerOrderName === vegetarian.toLowerCase() ||
    lowerOrderName === hawaiian.toLowerCase() ||
    lowerOrderName === pepperoni.toLowerCase()
  );
}

//Function to calculate final price of order
function totalCost(orderQuantity) {
  const orderTotal = orderQuantity * pizzaPrice;
  return orderTotal;
}

//Function to calculate cooking time
function cookingTime(orderQuantity) {
  let cookingTime;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }
  return cookingTime;
}
