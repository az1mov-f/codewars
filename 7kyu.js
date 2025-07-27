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
// console.log(switcher(["12", "28", "25", "21", "25", "7", "11", "22", "15"]));

// ===========================================================================

// 2.
// Question:
// Jenny is 9 years old. She is the youngest detective in North America.
// Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook.
// All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!
// In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.
// Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
// Spaces are not places, you need the actual letters. No spaces.
// The returned word should be all lowercase letters.
// if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
// Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

// Answare:
// let missingWord = (nums, str) => {
//   let newStr = str.replaceAll(" ", "").toLowerCase();
//   let newNums = nums.sort((a, b) => a - b);
//   if (newStr.at(newNums[0]) && newStr.at(newNums[1]) && newStr.at(newNums[2])) {
//     return `${newStr.at(newNums[0])}${newStr.at(newNums[1])}${newStr.at(
//       newNums[2]
//     )}`;
//   } else return "No mission today";
// };
// console.log(missingWord([7, 10, 1], "see you later"));

// ===========================================================================

// 3.
// Question:
// Given a string and an array of indices,
// rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.
// input: "abcd", [0, 3, 1, 2];
// output: "acdb";
// Notes.
// The string and the array will be of equal length.
// The string will contain valid characters (A-Z, a-z, or 0-9);
// the array will contain valid indices.

// Answare:
// let scramble = (str, arr) => {
//   let newArr = [];
//   arr.forEach((num, i) => (newArr[num] = str.at(i)));
//   return newArr.join("");
// };
// console.log(scramble("abcd", [0, 3, 1, 2]));
