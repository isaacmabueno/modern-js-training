const person = {
    fistName: 'John',
    sayHi() {
        console.log('Hi, my name is  ${this.firstName}!');
    }
};

setTimeout(function() {
    person.sayHi();
}, 1000);