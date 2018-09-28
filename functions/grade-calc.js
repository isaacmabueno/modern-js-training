// Create a grade calculator function that takes in two arguments.a
// the studentScore, possibleScore
// 15/20 --> you got a Cache(75%)!

// give those two inputs 

// A - 90-100, B - 80-89, C - 70-79, D - 60-69, F - 0-59

// call the function calling in the students score out of the total score


let gradeCalc = function(studentScore = 0, possibleScore = 100) {
    let totalPoss = `${studentScore} / ${possibleScore} –`;
   
    if ( studentScore >= 90) {
        console.log('score is great than than 90')
    } else if ( studentScore >= 80) {
        console.log('your score is above average – B');
    } else if ( studentScore >= 70) {
        console.log('Your score is average- C');
    } else if ( studentScore >= 60) {
        console.log('You barely passed – D');
    } else if ( studentScore <= 60) {
        console.log('You Failed – F');
    }
    return totalPoss;
}


// if studentScore >= 90 {
//     console.log('more than 90')
// } else {
//     console.log('less than 90');
// }

let a = gradeCalc(87, undefined)

console.log(a);
