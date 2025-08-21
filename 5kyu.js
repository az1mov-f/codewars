// 1.
// Question :
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Answare:
// let moveZeros = (arr) => arr.sort((a, b) => (b === 0 ? -1 : 0));
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// ===========================================================================

// 2.
// Question:
// https://www.codewars.com/kata/688a614adfe03af512d4458c/javascript

// Given a possibly empty list of strictly positive numbers and a non-negative target number,
// return either a subset of the list summing to the target, or null or a similar empty value if no such subset exists.

// The subset must consist of unique ( by index ) list elements.
// If a particular value occurs more than once in the input list, you can use it up to as many times as it occurs.
// The empty subset sums to 0.
// If multiple valid subsets exist, return any one of them.

// The target will never be much bigger than the sum of the input list, and often quite a bit smaller.

// Answare:
// let subsetSum = (nums, target) => {
//   let newArr = Array(target + 1).fill(null);
//   newArr[0] = [];

//   for (let num of nums)
//     for (let i = target; i >= num; i--)
//       if (newArr[i - num] !== null) newArr[i] = [...newArr[i - num], num];

//   return newArr[target];
// };
// console.log(subsetSum([1, 2, 3, 4, 5], 6));

// ===========================================================================

// 3.
// Question:
// https://www.codewars.com/kata/52dd72494367608ac1000416/javascript

// Answare:
// let isPrime = (n) => {
//   let x = false;
//   if (n > 1) {
//     for (let i = 2; i < n; i++) {
//       if (!(n % i)) {
//         x = false;
//         break;
//       } else x = true;
//     }
//     if (n == 2) return true;
//   } else return false;
//   return x;
// };
// console.log(isPrime(19));

// let getPrimes = (start, finish) => {
//   let max = Math.max(start, finish),
//     min = Math.min(start, finish);
//   let arr = [];
//   for (let i = min; i <= max; i++) {
//     x = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         x = false;
//         break;
//       }
//     }
//     if (x && i > 1) arr.push(i);
//   }
//   return arr;
// };
// console.log(getPrimes(0, 30));

// ===========================================================================

// 4.
// Question:
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/javascript

// Answare:
// let zeros = (n) => {
//   let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 5);
//     count += n;
//   }
//   return count;
// };

// console.log(zeros(100));

// ===========================================================================

// 5.
// Question:
// https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript

// Answare:
// let orderWeight = (str) =>
//   str
//     .split(" ")
//     .sort((a, b) => {
//       let recFunc = (n) => n.split("").reduce((s, d) => s + +d, 0);
//       let diff = recFunc(a) - recFunc(b);
//       return diff === 0 ? a.localeCompare(b) : diff;
//     })
//     .join(" ");

// console.log(orderWeight("56 65 74 100 99 68 86 180 90"));

// ===========================================================================

// 6.
// Question:
// https://www.codewars.com/kata/530e15517bc88ac656000716/javascript

// Answare:
// let rot13 = (str) => {
//   // a-z | 97 - 122
//   // A-Z | 65 - 90
//   let newStr = "";
//   for (let v of str) {
//     let code = v.charCodeAt();
//     if (65 <= code && code <= 90)
//       newStr += String.fromCharCode(code > 77 ? code - 13 : code + 13);
//     else if (97 <= code && code <= 122)
//       newStr += String.fromCharCode(code > 109 ? code - 13 : code + 13);
//     else newStr += v;
//   }
//   return newStr;
// };

// console.log(rot13("test12!")); // grfg12!
// console.log(rot13("Test12!")); // Grfg12!

// ===========================================================================

// 7.
// Question:
// https://www.codewars.com/kata/5547cc7dcad755e480000004/javascript

// Answare:
// let removeNb = (n, arr = []) => {
//   let sum = (n * (n + 1)) / 2;
//   for (let a = 1; a <= n; a++) {
//     let b = (sum - a) / (a + 1);
//     if (Number.isInteger(b) && b <= n) arr.push([a, b]);
//   }
//   return arr;
// };

// console.log(removeNb(26));

// ===========================================================================

// 8.
// Question:
// https://www.codewars.com/kata/522498c9906b0cfcb40001fc/javascript

// Answare:
// let genfib = () => {
//   let a = 0,
//     b = 1;
//   return function fib() {
//     let cur = a;
//     [a, b] = [b, a + b];
//     return cur;
//   };
// };

// let fib = genfib();

// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());

// ===========================================================================
