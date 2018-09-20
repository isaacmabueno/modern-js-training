function calculateBill(total, tax = 0.10, tip = 0.18) {
    return total + (total * tax) + (total * tip);
}
//you can also pass undefined if the argument has been set above.
const totalBill = calculateBill(100, .50, 0.43);
console.log(' Your total with tax and tip comes out to ' + totalBill);