// claculate cross platform path
const path = require('path');
const calcedPath = path.join('Day8', 'input.txt');

//read input from file
const arrEncodedImage = require('fs')
    .readFileSync(calcedPath)
    .toString().split('');

const wide = 25;
const tall = 6;
var decodedImage = [];
const sizeOfLayer = wide * tall

for (var i = 0; i < sizeOfLayer; i++) {
    decodedImage[i] = FindcorrespondingColor(arrEncodedImage, i, sizeOfLayer);
}

printPicture(decodedImage, wide);

function FindcorrespondingColor(arr, index, sizeOfLayer) {
    for (var i = index; i < arr.length; i += sizeOfLayer) {
        if (arr[i] != '2')
            return arr[i];
    }

    return '2'
}

function printPicture(arr, wide) {
    //make the ans readble
    arr.forEach((c, i, arr) => '0' === c ? arr[i] = ' ' : c = '0');

    for (var i = 0; i < arr.length; i += wide) {
        console.log(arr.slice(i, i + wide).join(' ') + '\n');
    }
}