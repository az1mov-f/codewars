// 1.
// Question:
// Given an array of numbers (in string format), you must return a string.
// The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc.
// You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
// All inputs will be valid.

// Answare:
// let switcher = (arr) => {
//   let str = "";
//   arr.forEach((num) => {
//     let n = Number(num);
//     n === 27
//       ? (str += "!")
//       : n === 28
//       ? (str += "?")
//       : n === 29
//       ? (str += " ")
//       : n > 1
//       ? (str += String.fromCharCode(123 - n))
//       : (str += String.fromCharCode(121 + n));
//   });
//   return str;
// };
