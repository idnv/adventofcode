// @ts-check

const start = 372304;
const  end = 847060;
var arrAns = new Array();

for (var i = start; i <= end; i++){
	if((isIncrease(String(i))) && (isExactlyTwoAdjacentDigits(String(i))))
    	arrAns.push(i);
}
console.log("ex2 arrAns: " + arrAns.length);

function isIncrease(number) {
	return number.split('').every((element,index,array)=> index === 0 || array[index] >= array [index -1]);
};

function isExactlyTwoAdjacentDigits(number) {
    for(var i = 0; i <= 9; i++){
        if(number.split('').filter(x=> x == i).length === 2)
            return true;
    }

    return false;
};
    


