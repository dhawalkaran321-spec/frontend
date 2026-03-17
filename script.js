function calculateCalories(){

let foodCalories = document.getElementById("food").value;
let quantity = document.getElementById("qty").value;

let total = foodCalories * quantity;

document.getElementById("result").innerHTML = 
"Total Calories: " + total + " kcal";

}