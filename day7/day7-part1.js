const intCodeMap = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 30, 51, 76, 101, 118, 199, 280, 361, 442, 99999, 3, 9, 102, 5, 9, 9, 4, 9, 99, 3, 9, 102, 4, 9, 9, 1001, 9, 3, 9, 102, 2, 9, 9, 101, 2, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 3, 9, 1001, 9, 4, 9, 102, 5, 9, 9, 101, 3, 9, 9, 1002, 9, 3, 9, 4, 9, 99, 3, 9, 101, 5, 9, 9, 102, 4, 9, 9, 1001, 9, 3, 9, 1002, 9, 2, 9, 101, 4, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 1001, 9, 3, 9, 102, 5, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 99, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 99];
var numOfParameter = { 1: 3, 2: 3, 3: 1, 4: 1, 5: 2, 6: 2, 7: 3, 8: 3, 99: 0 };
var inputPointer;
var phaseSetting = [0, 1, 2, 3, 4];
// Calculate all permutator of phases
var phasesAllCombinations = permutator(phaseSetting);

var ampAns = [];
var lastAns = 0;
for (const phase of phasesAllCombinations) {
    console.log("phase is:" + phase.toString());
    for (const amp of phase) {
        lastAns = run(intCodeMap.slice(), [Number(amp), lastAns]);
    }
    ampAns.push(lastAns);
    lastAns = 0;
}
var maxThruster = ampAns.reduce((p, v) => Math.max(p, v), 0);
console.log("The ans of part 1 is: " + maxThruster);


function run(input, phase) {
    // get next Instruction from generator function
    for (const instruction of getInstruction(input)) {
        // clac int code in int code machine
        const ans = doInstruction(input, instruction, phase);
        // if there is no return value (return value is "undefined") or the value returned is 0 keep running
        if (ans !== 0 && ans !== undefined) {
            // the machine returned it's diagnostic code 
            console.log("The ans is: " + ans);
            return ans;
        }
    }
}

//this function get's the next Instruction to do
function* getInstruction(input) {
    // set start pointer to start of the input/intcode
    inputPointer = 0;
    while (inputPointer < input.length) {
        let instruction = input[inputPointer];
        let opcode = instruction % 100;
        let mode = Array.from(Math.floor(instruction / 100).toString()).map(Number).reverse();
        while (mode.length < numOfParameter[opcode])
            mode.push(0);
        let parameterIndex = [];
        for (let i = 1; i <= numOfParameter[opcode]; i++)
            parameterIndex.push(inputPointer + i);
        inputPointer += numOfParameter[opcode] + 1;
        yield { Opcode: opcode, Mode: mode, ParameterIndex: parameterIndex };
    }
}

function doInstruction(intCode, instruction, phase = 5) {
    let index = instruction.ParameterIndex;
    let mode = instruction.Mode;
    // return value depends on mode value (immediate mode or position mode)
    const getValue = (index, intCode, mode) =>
        mode === 0 ? intCode[intCode[index]] : intCode[index];
    switch (instruction.Opcode) {
        case 1:
            intCode[intCode[index[2]]] = getValue(index[0], intCode, mode[0]) + getValue(index[1], intCode, mode[1]);
            break;
        case 2:
            intCode[intCode[index[2]]] = getValue(index[0], intCode, mode[0]) * getValue(index[1], intCode, mode[1]);
            break;
        case 3:
            intCode[intCode[index[0]]] = phase.shift();
            break;
        case 4:
            return getValue(index[0], intCode, mode[0]);
        case 5:
            if (getValue(index[0], intCode, mode[0]))
                inputPointer = getValue(index[1], intCode, mode[1]);
            break;
        case 6:
            if (!getValue(index[0], intCode, mode[0]))
                inputPointer = getValue(index[1], intCode, mode[1]);
            break;
        case 7:
            intCode[intCode[index[2]]] = getValue(index[0], intCode, mode[0]) < getValue(index[1], intCode, mode[1]);
            break;
        case 8:
            intCode[intCode[index[2]]] = getValue(index[0], intCode, mode[0]) === getValue(index[1], intCode, mode[1]);
            break;
        case 99:
            return intCode[0];
        default:
            return -1;
    }
};


function permutator(inputArr) {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }
    permute(inputArr);
    return result;
}
