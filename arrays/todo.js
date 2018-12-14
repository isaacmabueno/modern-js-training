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

console.log(todos.length);
console.log(`You have ${todos.length} Todos`);
console.log(`Todo Text: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length -2]}`)

