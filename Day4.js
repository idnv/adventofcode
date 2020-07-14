var i;
var min = 372304;
var max = 847060;
var ans = new Array();
for (i = min; i <= max; i++){
	if((isIncrease(i)) && (isAdjacentDigits(i)))
    	ans.push(i);
}
console.log(ans);
console.log("ex1 ans: " + ans.length);

function isIncrease(number) {
	var digits = (""+number).split("");
	var digitsSorted = (""+number).split("").sort(function(a, b){return a - b});
	return arraysEqual(digits, digitsSorted)
};
    
function arraysEqual(a, b) {
	if (a === b) return true;
    if (a == null || b == null) return false;
	if (a.length !== b.length) return false;
  
	for (var i = 0; i < a.length; i++) {
    	if (a[i] !== b[i]) 
        	return false;
  	}
  return true;
}
    
function isAdjacentDigits(number) {
	var strNum = number.toString();
	for (var i = 1; i < strNum.length ; i++) {
    	if (number[i - 1] == number[i]) 
        	return true;
  	}
    return false;
};
    
