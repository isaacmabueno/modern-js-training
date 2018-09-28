//multiple arguments

// let add = function(a, b, c, d) {
    // you can do this
    // let foo = a + b;
    // or you can just return it without declaring or storing it in a var
    // return (a + b) * c / d;
// }

// let result = add(10, 1 , 100 , 4);
// console.log(result);

//default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`;
}

let total = getScoreText( 'Phil', 10);
console.log(total);




// let totalBill = function(bill, tax = .1, tip = .20) {
//     let billWithTax = bill * tax;
//     let billWithTip =  bill * tip;
//     return bill + billWithTax + billWithTip;
// }

// let totalWithTaxTip = totalBill(100, .09, .18);
// console.log(totalWithTaxTip);



// CREATE A TEMPLATE STRING USING THE BACKTICK ``
// let name = 'isaac';
// console.log(`hey my name is ${name}`);


// return a string or message from the tip calculator

// a 25% on $40 would be $10


// challenge area
// getTip

// create a calculator that takes in two arguments... the total for the bill and the tip percentage.a

let TotalBill = function(total, tip =  .20) {
    let tipConversion = tip * 100;
    let tipEval = total * tip;
    return `A ${tipConversion}% on $${total} would be $${tipEval}`;
}

let a= TotalBill(55.00, undefined)
console.log(a)
