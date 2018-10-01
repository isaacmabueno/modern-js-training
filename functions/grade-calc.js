// Create a grade calculator function that takes in two arguments.a
// the studentScore, possibleScore
// 15/20 --> you got a Cache(75%)!

// give those two inputs 

// A - 90-100, B - 80-89, C - 70-79, D - 60-69, F - 0-59

// call the function calling in the students score out of the total score


let gradeCalc = function(studentScore = 0, possibleScore = 100) {
    let totalPoss = (studentScore / possibleScore) * 100;
    let letterGrade = ''
   
    if ( totalPoss >= 90) {
        letterGrade = 'A';
    } else if ( totalPoss >= 80) {
        letterGrade = 'B';
    } else if ( totalPoss >= 70) {
        letterGrade = 'C';
    } else if ( totalPoss >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    // return totalPoss;
        return(`You got the letter grade ${letterGrade} – (${totalPoss})%`);

    
}

let a = gradeCalc(77, undefined)

console.log(a);
