const { NUMBERS } = require("./data.js");

let highest = 0;

for (let x = 0; x < NUMBERS.length; x++) {
  for (let y = 0; y < NUMBERS.length; y++) {
    for (let z = 0; z < NUMBERS.length; z++) {
      if (
        NUMBERS[x] + NUMBERS[y] + NUMBERS[z] === 2020 &&
        NUMBERS[x] * NUMBERS[y] * NUMBERS[z] > highest
      ) {
        highest = NUMBERS[x] * NUMBERS[y] * NUMBERS[z];
        console.log(NUMBERS[x] * NUMBERS[y] * NUMBERS[z]);
      }
    }
  }
}
