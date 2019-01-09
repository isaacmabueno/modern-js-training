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


for (let i = 0; i < todos.length; i++) {
    const num = i + 1;
    const todo = todos[i];
    console.log(`${num}. ${todo}`)
}

//delete the third item
// add a new item onto the end
// remove the first item from the list


// console.log(todos.length);

// console.log(`Todo Text: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length -2]}`)


// todos.splice(2,1);
// todos.push('Last item');
// todos.shift();

// todos.forEach(function(todo, index) {
//     console.log('---------');
//     const num = index +1;
//     console.log(`${num}. ${todo}`);
// })
