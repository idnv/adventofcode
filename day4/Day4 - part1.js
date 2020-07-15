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
	return number.split('').every((element,index,array)=> index === 0 || array[index] >= array [index -1]);
};
        
function isAdjacentDigits(number) {
	for (var i = 1; i < number.length; i++) {
    	if (number[i - 1] == number[i]) 
        	return true;
  	}
	return false;
};
    


