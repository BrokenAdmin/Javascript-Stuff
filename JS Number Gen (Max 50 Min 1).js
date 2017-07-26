var Id = setTimeout(NumGen,10)
function NumGen(){
var mathdeci = (50*Math.random())
var mathran = (Math.floor(mathdeci))
if(mathran==0){
	var Id1 = setTimeout(NumGen,20)
}
else{
console.log(mathran)
}
}

// Changing (Line #11's) if statement's 
// equation with < & > or other operators
// to make a max & minimum of the number 
// generated.

// The max can be easily changed by editing
// the numral on line #3.
// (This is recomemded as the editing of max
// on line #11 can cause unnecessary
// reloading of the function)
