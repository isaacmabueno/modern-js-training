// let bookOne = {
//     title: 'History of Art',
//     author: 'H.W.Jasen',
//     pages: 801
// }

// let bookTwo = {
//     title: 'Protestant Theology in the 19th Century',
//     author: 'Karl Barth',
//     pages: 487
// }

// let getBooks = function(book) {
//     return {
//         bookName: `This book is called ${book.title}, by ${book.author}.`,
//         bookLength: `${book.title} is ${book.pages} pages long`
//     }
// }

// let a = getBooks(bookOne)
// console.log(`${a.bookName} ${a.bookLength}`)





// CHALLENGE AREA

// create function - take fahrenheit in - return in object with all three (converted celcius and kelvin)


let conversion = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit - 32) * 5/9,
        celsius:(fahrenheit - 12) * 3/9
    }
}

let a = conversion(50);
console.log(a)