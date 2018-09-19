const names = ['Isaac', 'Annie', 'Honor', 'Ellie'];

const fullNames = names.map(function(name) {
    return `${name}`;
});

// console.log(fullNames);

const fullNames2 = names.map((name) => {
    return `${name}`;
})

const fullNames3 = names.map(name => {
    return `${name}`;
});

// console.log(fullNames);


// or and implicit return

const fullNames4 = names.map(name => `${name}`);

console.log(fullNames4);

// or if i want to declare it here instead of the array it just replaces each of the objects in the array

const fullNames5 = names.map(() => `something goes here`);
console.log(fullNames5);



const sayMyName = (name) => {alert(`hello ${name}!`)};

sayMyName('Isaac');