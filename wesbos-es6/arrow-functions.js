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



// const sayMyName = (name) => {alert(`hello ${name}!`)};

// sayMyName('Isaac');

const race = '100 dash'
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos']

const win = winners.map((winner, i) => ({name: winner, race: race, place: i + 1}))

console.table(win);

const ages = [10, 23, 64, 98, 12, 54, 32, 29, 27, 78, 64]

const old = ages.filter(age => age >= 60);

console.log(old);