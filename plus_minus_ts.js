"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var inputString = "";
var inputLines = [];
var currentLine = 0;
process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on("end", function () {
    inputLines = inputString.split("\n");
    inputString = "";
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function plusMinus(arr) {
    // Write your code here
    var positive = 0;
    var negative = 0;
    var zeroes = 0;
    arr.forEach(function (num) {
        if (num > 0)
            positive++;
        else if (num < 0)
            negative++;
        else
            zeroes++;
    });
    var l = arr.length;
    //pnz
    console.log((positive / l).toFixed(6));
    console.log((negative / l).toFixed(6));
    console.log((zeroes / l).toFixed(6));
}
function main() {
    var n = parseInt(readLine().trim(), 10);
    var arr = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map(function (arrTemp) { return parseInt(arrTemp, 10); });
    plusMinus(arr);
}
