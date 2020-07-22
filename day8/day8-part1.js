// claculate cross platform path
const path = require('path');
const calcedPath = path.join('Day8', 'input.txt');

//read input from file
const arrEncodedImage = require('fs')
    .readFileSync(calcedPath)
    .toString().split('');

const wide = 25;
const tall = 6;

const numOfLayers = arrEncodedImage.length / (wide * tall)
const numOfZeroInLayers = getNumOfValInLayers(arrEncodedImage, '0', numOfLayers, wide * tall);
const indexLayerMaxZero = numOfZeroInLayers.reduce((iMax, x, i, arr) => x < arr[iMax] ? i : iMax, 0);
const maxLayerCode = arrEncodedImage.slice(indexLayerMaxZero * wide * tall, (indexLayerMaxZero + 1) * wide * tall)
const numOfOneDigit = getNumOfValInLayers(maxLayerCode, '1', 1, wide * tall)[0];
const numOfTwoDigit = getNumOfValInLayers(maxLayerCode, '2', 1, wide * tall)[0];
const ans = numOfOneDigit * numOfTwoDigit;
console.log("The part 1 ans is: " + ans);




function getNumOfValInLayers(arr, val, numOfLayers, sizeOfLayer) {
    var i, layer = new Array(numOfLayers).fill(0);
    for (i = 0; i < arr.length; i++)
        if (arr[i] === val)
            layer[Math.floor(i / sizeOfLayer)]++;
    return layer;
}
