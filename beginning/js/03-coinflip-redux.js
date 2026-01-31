
let coinFlip;

for (let i = 0; i < 10; i++) {

  coinFlip = Math.floor(Math.random() * 2);

  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
}
