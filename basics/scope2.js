//Global (name)
    //Local (name) - this local variables value shadows OVER THE PARENTS value
        //Local
    
    //Local
let name = 'name'

if (true) {
    let name = 'mike'
    if (true) {
        let name = 'jen'
        console.log(name)
    }
}

if (true ) {
    console.log(name)
}