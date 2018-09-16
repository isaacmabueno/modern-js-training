const numbers = [10, 20, 30, 40, 50];

const slice1 = numbers.slice(1,4);
const slice2 = numbers.slice.call(numbers, 1,4);
const slice3 = numbers.slice.apply(numbers,[1,4]);

console.log(slice1, slice2, slice3);