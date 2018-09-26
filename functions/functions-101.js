//Function - input (argument/arguments), code, output ( return value )
// let greetUser = function() {
//     console.log('Welcome user!')
// }

// greetUser();
// greetUser();
// greetUser();

// let square = function(num) {
//     let result = num * num
//     return result
// }

// let value = square(3)
// let otherValue = square(10)
// console.log(value, otherValue)



// challenge area
// this function is going to take in as the argument , the temp in farenheit, it's then going to run the conversion algorithm and convert the temp to celcius
// let convertFarenheitToCelcius = function(farenheit) {
//     let celsius = (farenheit - 32) * 5 / 9;
//     return celsius
// }


// let tempConvertor = function(farenheit) {
//     let celc = (farenheit - 32) * 5/9
//     return celc
// }

// let tempOne = tempConvertor(90)
// let tempTwo = tempConvertor(49)
// let TempThree = tempOne + tempTwo

// console.log(tempOne, tempTwo, TempThree)



// let squareRoot = function(mult) {
//     let test = mult * mult
//     return test
// }

// let ten = squareRoot(10)
// let twelve = squareRoot(12)

// console.log(ten, twelve)



// let convertTimezones = function(time) {
//     let pacific = (time - 200)
//     return pacific
// }
// let CST = convertTimezones(824)

// console.log('The current time on the West Coast is ' + CST)


//Challenge Area –

// challenge area

// this will take the temp in farenheit and run the conversion alg and return the temp in converFehrenheitToCelsius
// call a couple of times (32 -> 0) (68 ->20)
// pring the converted values

let convertFahrenheitToCelsius = function (fahrenheit) {
    let tempConversion = (fahrenheit - 32) * 5/9;
    return tempConversion;
}

tempOne = convertFahrenheitToCelsius(32);
tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);