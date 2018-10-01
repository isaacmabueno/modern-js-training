let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);


// challenge area.....name age location


// andrew is 27 and lives in phili

let person = {
    name: 'Isaac',
    age: 28,
    location: 'Chicago, IL'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

// console.log(person);

// increase age by 1 and print the message again


person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);