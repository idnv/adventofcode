// set source and dest
const source = "COM";
const destination = "COM";

// claculate cross platform path
const path = require('path');
const calcedPath = path.join('Day6', 'input.txt');

//read input from file
const input = require('fs')
    .readFileSync(calcedPath)
    .toString()

//take input and make it a dictinioary [node] = fatherNode
var treeMap = new Object();
const crossPlatformEndOfFile = require('os').EOL;
input.split(crossPlatformEndOfFile).forEach(row => treeMap[row.split(')')[1]] = row.split(')')[0]);
const root = getRootValue(treeMap);
// calc paths from source and dest to root 
const pathFromSource = calcShortPathToRoot(treeMap, root, treeMap[source]);
const pathFromDest = calcShortPathToRoot(treeMap, root, treeMap[destination]);
// find first common father value
const commonFather = pathFromSource.find(element => pathFromDest.includes(element));
// calculate the sum of path from source and dest to common father
const answer = pathFromSource.indexOf(commonFather) + pathFromDest.indexOf(commonFather);
console.log("Ans: " + answer);

function getRootValue(tree) {
    const isChildren = (p) => treeMap.hasOwnProperty(p);
    return Object.entries(tree).map(([_, parent]) => parent).find(p => !isChildren(p));
}

function calcShortPathToRoot(tree, root, node) {
    if (node == root || node == undefined) return [root];
    return [node].concat(calcShortPathToRoot(tree, root, tree[node]));
}
