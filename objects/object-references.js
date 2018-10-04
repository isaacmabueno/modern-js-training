myAccount = {
    name: 'Isaac B',
    expenses: 0,
    income: 0 
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}


let addIncome = function(account, amount) {
    account.income = account.income + amount
    console.log(account)
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
    console.log(account)
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. ${account.income} in income. ${account.expenses} in expenses.`
}

addExpense(myAccount, 4300.00)
addIncome(myAccount, 5600.00)

console.log(getAccountSummary(myAccount))
// resetAccount(myAccount)
// let getAccountSummary = function(printBalance) {
//     return `your account balance`
//     console.log(printBalance)
// } 

// resetAccount - this reset the expenses and income to zero - just needs to know wht account to change

//getAccountSummary - this will say
// Account or Isaac has $900. $1000 in income. $100 in expense. console.log this


// addIncome - done
// addExpense
// getAccountSummary
// resetAccount

// getAccountSummary
// addExpense(myAccount, 4300.00)
// addIncome(myAccount, 5600.00)
// getAccountSummary(myAccount)
// resetAccount(myAccount)