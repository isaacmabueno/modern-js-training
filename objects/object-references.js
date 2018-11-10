let myAccount = {
    name: 'Isaac B',
    expenses: 0,
    income: 0
}

let addIncome = function(amount, income) {
    amount.income = amount.income + income;
}

let addExpense = function(amount, expenses) {
    amount.expenses = amount.expenses + expenses;
}

let resetAccount = function(amount) {
    amount.income = 0;
    amount.expenses = 0;
}

let getAccountSummary = function(amount) {
    let accountBalance = amount.income - amount.expenses;
    return `As of ${new Date()}, you have a balance of $${accountBalance}. Your income is $${amount.income}. Your expenses are $${amount.expenses}.`;
}

addIncome(myAccount, 2800);
addExpense(myAccount, 2400);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(myAccount)
