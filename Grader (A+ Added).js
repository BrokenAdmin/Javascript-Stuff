
// Variable Input
 
var num1 = 100
var num2 = 100
var num3 = 95
var num4 = 120
var num5 = 100
var num6 = 90
var num7 = 100
var num8 = 100
var num9 = 50

// Grade Average Checking

var problem = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9
var problem2 = problem / 9
var problem2 = Math.floor(problem2)

// Grade Average Output

console.log("Grade Average: " + problem2)

// Grading

if(problem2 >= 100){
	var grade = "A+"
}

if(problem2 >= 90, problem2 < 100){
	var grade = "A"
}
if(problem2 > 80, problem2 <= 90){
	var grade = "B"
}
if(problem2 > 70, problem2 <= 80){
	var grade = "C"
}
if(problem2 > 60, problem2 <= 70){
	var grade = "D"
}
if(problem2 <= 60){
	var grade = "F"
}

// Grade Output

console.log(grade)
