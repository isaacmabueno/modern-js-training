// const person = {
//     fistName: "Isaac",
//     sayHi() {
//         console.log('Hi my name is ${this.firstName');
//     }
// };

// setTimeout(person.sayHi.bind(person), 1000);


Function.prototype.bind = function(thisArg) {
    return function() {
        return func.apply(thisArg);
    };
};