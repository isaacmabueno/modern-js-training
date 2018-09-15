// Lexical Scoping (Static Scope)
//1. Global Scope - contains all of the things defined outside of all code block
//2.Local Scope - Defined inside a code block

//In a scope you can access variables defined in that scope, or in any parent/ancestor scope.

// gloal scope
    //Local Scope (varTwo)
        // Local Scope (varFour)
    //Local Scope (varThree)
let varOne = 'varOne'

if (true) {
    console.log('varOne')
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}


if (true) {
    varThree = 'varThree'
    console.log(varThree)
}
console.log(varOne)