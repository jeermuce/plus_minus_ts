"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
  // Write your code here
  let positive: number = 0;
  let negative: number = 0;
  let zeroes: number = 0;
  arr.forEach((num) => {
    if (num > 0) positive++;
    else if (num < 0) negative++;
    else zeroes++;
  });
  const l = arr.length;
  //pnz
  console.log((positive / l).toFixed(6));
  console.log((negative / l).toFixed(6));
  console.log((zeroes / l).toFixed(6));
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
