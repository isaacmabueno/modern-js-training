//multiple arguments

let add = function(a, b, c, d) {
    // you can do this
    // let foo = a + b;
    // or you can just return it without declaring or storing it in a var
    return (a + b) * c / d;
}

let result = add(10, 1 , 100 , 4);
console.log(result);

//default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score;
}

let total = getScoreText( 'Phil', 10);
console.log(total);



// challenge area
// getTip

// create a calculator that takes in two arguments... the total for the bill and the tip percentage.a

let TotalBill = function(total, tip =  .20) {
    return total + (total * tip);
}

let a= TotalBill(100.00, undefined)
console.log(a)