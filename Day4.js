// @ts-check

const start = 372304;
const  end = 847060;
var arrAns = new Array();

for (var i = start; i <= end; i++){
	if((isIncrease(String(i))) && (isAdjacentDigits(String(i))))
    	arrAns.push(i);
}
console.log("ex1 arrAns: " + arrAns.length);

function isIncrease(number) {
	var digits = number.split("");
	var digitsSorted = number.split("").sort();
	return arraysEqual(digits, digitsSorted)
};
    
function arraysEqual(a, b) {
	if (a.length !== b.length) 
		return false;
  
	for (var i = 0; i < a.length; i++) {
    	if (a[i] !== b[i]) 
        	return false;
  	}
  return true;
}
    
function isAdjacentDigits(number) {
	for (var i = 1; i < number.length; i++) {
    	if (number[i - 1] == number[i]) 
        	return true;
  	}
	return false;
};
    


