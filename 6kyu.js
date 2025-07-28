// 1.
// Question:
// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists,
// such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that:
// If it is the case we will return k, if not return -1.
// Note: n and p will always be strictly positive integers.
// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Answare:
// let digPow = (n, p) => {
//   let res = `${n}`.split("").reduce((sum, cur) => sum + cur ** p++, 0);
//   res % n === 0 ? (res = res / n) : (res = -1);
//   return res;
// };
// console.log(digPow(46288, 3));

// ===========================================================================

// 2.
// Question:
// https://www.codewars.com/kata/5626b561280a42ecc50000d1/javascript

// Answare:
// let sumDigPow = (a, b) => {
//   let newArr = [];
//   for (let i = a; i <= b; i++) {
//     if (`${i}`.length > 1)
//       String(i)
//         .split("")
//         .reduce((sum, cur, inx) => sum + (+cur) ** (inx + 1), 0) === i &&
//         newArr.push(i);
//     else newArr.push(i);
//   }
//   return newArr;
// };
// console.log(sumDigPow(1, 100));

// ===========================================================================

// 3.
// Question:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
// This is the first kata in series:
// 1. Find the unique number (this kata)
// 2. Find the unique string
// 3. Find The Unique

// Answare:
// let findUniq = (arr) => arr.find((v) => arr.lastIndexOf(v) === arr.indexOf(v));
// console.log(findUniq([4, 4, "foo", 4]));

// ===========================================================================

// 4.
// Question:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// Answare:
// let expandedForm = (num) => {
//   let str = `${num}`;
//   let i = str.length - 1;
//   let newStr = "";
//   for (let val of str) {
//     if (+val !== 0) {
//       newStr += val;
//       for (let j = 0; j < i; j++) newStr += 0;
//       newStr += " + ";
//     }
//     i--;
//   }
//   newStr = newStr.slice(0, newStr.length - 3);
//   return newStr;
// };
// console.log(expandedForm(70304));

// ===========================================================================
