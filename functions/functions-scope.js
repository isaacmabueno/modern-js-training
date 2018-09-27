// Global Scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local Scope (fahrenheit, celsius)
        // Local Scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let tempConversion = (fahrenheit - 32) * 5/9;

    if(tempConversion <=0) {
        let isFreezing = true;
    }

    return tempConversion;

}

tempOne = convertFahrenheitToCelsius(32);
tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);