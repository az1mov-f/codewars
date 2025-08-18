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
