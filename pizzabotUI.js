//Variable declarations
const pizzaPrice = 80;

//FUNCTIONS

//Function to calculate final price of order
function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
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

//Function to handle the order submission
function placeOrder() {
  let orderName = document.getElementById("pizzaType").value;
  let orderQuantity = parseInt(document.getElementById("pizzaQuantity").value);

  //validate input
  if (orderName === " " || isNaN(orderQuantity) || orderQuantity < 1) {
    alert("You have to input a valid pizza type and quantity.");
    return;
  }

  //Calculate final price and cooking time
  const orderTotal = totalCost(orderQuantity);
  const timeNeeded = cookingTime(orderQuantity);

  //Order summary
  const orderSummary = `ORDER SUMMARY: <br>  
  We'll get started on your ${orderName}(s) right away. <br> 
  Total Cost: ${orderTotal} kr.\nCooking Time: ${timeNeeded} minutes.<br>
  Thank you for your order!`;

  //Display order summary on the page
  document.getElementById("orderResponse").innerHTML = orderSummary;
}
