let name = '              Isaac Bueno';

// length property
console.log(name.length);

let password = 'a8m1me0ksnfaspassword234'
console.log(name)
console.log(password.includes('234'));
console.log(name.trim())




//challenge area
// create a function called
let isValidPassword = function(password) {
    // validate the length here
   return password.length >=8 && !password.includes('password')
}
// it will take a single arguemnent, the string password to validate and return 
// true if the password is valid and false if otherwise

// only return true if the length is 9 or more and doesn't contain the word 
// password...if it meets both criteria is should return true


console.log(isValidPassword('asdf'))
console.log(isValidPassword('asdasfas23r9jf'))
console.log(isValidPassword('asdfpassword1498n'))