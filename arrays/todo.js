// 5 different todos
// print a message that includes the length
// you have x todos
// print the first and second to last items to the terminal and you can format like todo: "todo text"

const todos = [
    'Walk the dog',
    'Take the train home',
    'Finish work',
    'Chistmas party',
    'Sleep'
]


//delete the third item
// add a new item onto the end
// remove the first item from the list


// console.log(todos.length);

// console.log(`Todo Text: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length -2]}`)
todos.splice(2,1);
todos.push('Last item');
todos.shift();

console.log(todos)
console.log(`You have ${todos.length} Todos`);