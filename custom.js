let minNumber = 10;
let maxNumber = 80;

let randomNumber;

do {
    randomNumber = Math.floor(Math.random() / 2 * (maxNumber + minNumber) -minNumber);
} while (randomNumber < minNumber || randomNumber > maxNumber);

console.log(randomNumber);
