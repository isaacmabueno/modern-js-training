class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        this.sayHi = this.sayHi.bind(this);
    }

    sayHi() {
        console.log('Hi my name is ${this.firstName}');
    }
}

const person = new Person ("John", "Doe");
// person.sayHi();
const greet = person.sayHi.bind(person);
greet();