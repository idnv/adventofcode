// claculate cross platform path
const path = require('path');
const calcedPath = path.join('Day6', 'input2.txt');

//read input from file
const input = require('fs')
    .readFileSync(calcedPath)
    .toString()

//take input and make it a dictinioary [node] = fatherNode
var treeMap = new Object();
const crossPlatformEndOfFile = require('os').EOL;
input.split(crossPlatformEndOfFile).forEach(row => treeMap[row.split(')')[1]] = row.split(')')[0]);
// set source and dest
const source = "YOU";
const destination = "SAN";
const root = getRootValue(treeMap);
// calc paths from source and dest to root 
const pathFromSource = calcShortPathToRoot(treeMap, root, source);
const pathFromDest = calcShortPathToRoot(treeMap, root, destination);
// find first common father value
const commonFather = pathFromSource.filter(element => pathFromDest.includes(element)).shift();
//short path to common father from source
const indexOfCommonFatherInSourcePath = pathFromSource.indexOf(commonFather);
pathFromSource.splice(indexOfCommonFatherInSourcePath, pathFromSource.length - indexOfCommonFatherInSourcePath);
//short path to common father from destination
const indexOfCommonFatherInDestPath = pathFromDest.indexOf(commonFather);
pathFromDest.splice(indexOfCommonFatherInDestPath, pathFromDest.length - indexOfCommonFatherInDestPath);
// calculate answer
var answer = pathFromSource.length + pathFromDest.length;


function getRootValue(tree) {
    const isChildren = (p) => treeMap.hasOwnProperty(p);
    return Object.entries(tree).map(([_, parent]) => parent).find(p => !isChildren(p));
}

function calcShortPathToRoot(tree, root, node, path = []) {
    if (node != root) {
        var father = tree[node]
        path.push(father);
        calcShortPathToRoot(tree, root, father, path);
    }
    return path;
}
