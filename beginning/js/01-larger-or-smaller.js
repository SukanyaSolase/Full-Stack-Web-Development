const num1 = parseInt(prompt("Enter the first integer:"), 10);
const num2 = parseInt(prompt("Enter the second integer:"), 10);

let message;
if (num1 > num2) {
  message = `The larger number is ${num1}.`;
} else if (num2 > num1) {
  message = `The larger number is ${num2}.`;
} else {
  message = "The numbers are equal.";
}

document.getElementById("result").textContent = message;

