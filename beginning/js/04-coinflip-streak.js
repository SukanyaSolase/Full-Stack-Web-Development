let coinFlip;

let streak = 0;

do {
 
  coinFlip = Math.floor(Math.random() * 2); 

  if (coinFlip === 0) {
    console.log("Heads");
    streak++;
  } else {
    console.log("Tails");
  }

} while (coinFlip === 0);

console.log("Heads streak: " + streak);
