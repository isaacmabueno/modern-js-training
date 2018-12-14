let guessNumber = function(number) {

    let min = 1;
    let max = 5;
    let randomNumber = Math.floor(Math.random() * (max-min + 1) + min);
    console.log(randomNumber);
    return number === randomNumber;
}

console.log(guessNumber(3))