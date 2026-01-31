let start = parseInt(prompt("Enter a number to count down from:"), 10);

if (isNaN(start) || start < 0) {
  alert("Please refresh and enter a valid non-negative number.");
} else {
  for (let i = start; i >= 0; i--) {
    console.log(i);
  }
}