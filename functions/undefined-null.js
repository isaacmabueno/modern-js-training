//undefined for variable
let name 
name = 'jan'
if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log('your name is ' + name)
}

// undefined for function arguments
let square = function(num) {
    console.log(num)
}

square()