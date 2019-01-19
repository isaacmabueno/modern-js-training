// push, pop, shift, unshift, splice

const notes = [{
    title: 'title one',
    body: 'body one'
}, {
    title: 'title two',
    body: 'body two'
}, {
    title: 'title three',
    body: 'body three'
}, {
    title: 'title four',
    body: 'body four'
}, {
    title: 'title five',
    body: 'body five'
}, {
    title: 'title six',
    body: 'body six'
}, {
    title: 'Title seven',
    body: 'body seven'
}]

const findNote = function(notes, noteTitle) {
    const search = notes.findIndex(function (note, search) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[search]
}

const note = findNote(notes, 'title seven')
console.log(note)






// console.log(note);

// const searchFunc = notes.findIndex(function(note, searchFunc) {
//     let seven = 'title seven'
//     return note.title.toLowerCase() === seven.toLowerCase();
// })

// console.log(searchFunc);














// for (let i=0; i<notes.length; i++) {
//     console.log()
// }

// console.log(notes.pop());
// notes.push('My New Note', 'another note', 'last note');

// console.log(notes.shift())
// notes.unshift('My first note');


// for (let i=1; i<=20; i++) {
//     console.log(i);
// }

// notes[2] = 'This is the new note 3'
// notes.forEach(function(item, index) {
//     console.log('---------');
//     console.log(index);
//     console.log(item);
// })

// notes.splice(1,1);
// notes.splice(1,0, 'This is the new second item');


// console.log(notes);
// console.log(notes.pop())



// for (i=0; i < notes.length; i++) {
//     console.log(notes[i]);
// }


