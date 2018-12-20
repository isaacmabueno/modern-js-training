// push, pop, shift, unshift, splice

const notes = [
    'Note 1',
    'Note 2',
    'Note 3',
]

// console.log(notes.pop());
// notes.push('My New Note');

// console.log(notes.shift())
// notes.unshift('My first note');
notes[2] = 'This is the new note 3'
notes.forEach(function(item) {
    console.log(item);
})

// notes.splice(1,1);
// notes.splice(1,0, 'This is the new second item');


console.log(notes);
// console.log(notes.pop())

