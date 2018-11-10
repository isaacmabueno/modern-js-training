let myAccount = {
    name: 'Isaac Bueno',
    expenses: 0,
    income: 0
}

let addIncome = function(amount, income) {
    amount.income = amount.income + income;
}

let addExpense = function(amount, expense) {
    amount.expenses = amount.expenses + expense;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
}

addIncome(myAccount, 1900);
console.log(myAccount);
addExpense(myAccount, 1400);
console.log(myAccount);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));