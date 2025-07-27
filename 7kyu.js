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

// ===========================================================================

// 4.
// Question:
// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n.
// Assume that m is a positive integer.
// Ex.
// (3, 5.0) --> [5.0, 10.0, 15.0]

// Answare:
// let multiples = (m, n) => {
//   let newArr = [];
//   for (let i = 1; i <= m; i++) newArr.push(n * i);
//   return newArr;
// };
// console.log(multiples(5, 6.0));

// ===========================================================================

// 5.
// Question:
// A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7.
// In other words, subtract twice the last digit from the number formed by the remaining digits.
// Continue to do this until a number known to be divisible by 7 is obtained;
// you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.
// The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.
// Examples:
// 1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.
// The number of steps to get the result is 1.
// 2 - m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 and 7 is divisible by 7.
// 3 - m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; thus, since 33 is not divisible by 7, 372 is not divisible by 7.
// 4 - m = 477557101->47755708->4775554->477547->47740->4774->469->28 and 28 is divisible by 7, so is 477557101. The number of steps is 7.
// Task:
// Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers,
// the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7),
// the second one being the number of steps to get the result.
// Forth Note:
// Return on the stack number-of-steps, last-number-m-with-at-most-2-digits
// Examples:
// seven(371) should return [35, 1]
// seven(1603) should return [7, 2]
// seven(477557101) should return [28, 7]

// Answare:
// let seven = (num, count = 0) => {
//   let newNam = `${num}`;
//   if (newNam.length > 2) {
//     let lastVal = +newNam.at(-1);
//     let currVal = +newNam.slice(0, newNam.length - 1);
//     let res = currVal - lastVal * 2;
//     return seven(res, count + 1);
//   } else {
//     return [+newNam, count];
//   }
// };
// console.log(seven(1021));

// ===========================================================================

// 6.
// Question:
// This is my first Kata in the Ciphers series. This series is meant to test our coding knowledge.
// Ciphers #1 - The 01 Cipher
// This cipher doesn't exist, I just created it by myself. It can't actually be used, as there isn't a way to decode it. It's a hash. Multiple sentences may also have the same result.
// How this cipher works
// It looks at the letter, and sees it's index in the alphabet, the alphabet being a-z, if you didn't know. If it is odd, it is replaced with 1, if it's even, its replaced with 0. Note that the index should start from 0. Also, if the character isn't a letter, it remains the same.
// Example
// encode("Hello World!"); // => "10110 00111!"
// This is because H's index is 7, which is odd, so it is replaced by 1, and so on.
// Have fun (en)coding!

// Answare:
// let encode = (str) => {
//   let res = "";
//   for (let val of str.toLowerCase())
//     val !== val.toUpperCase()
//       ? (res += (val.charCodeAt() - 97) % 2 ? 1 : 0)
//       : (res += val);
//   return res;
// };
// console.log(encode("Hello World!"));

// ===========================================================================

// 6.
// Question:
// Your friend Robbie has successfully created an AI that is capable of communicating in English!
// Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:
// ["this","is","a","sentence"]
// Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.
// Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep.
// So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives,
// and formats it into proper English orthography.
// Your function should:
// Capitalise the first letter of the first word.
// Add a period (.) to the end of the sentence.
// Join the words into a complete string, with spaces.
// Do no other manipulation on the words.
// Here are a few examples of what your function should do:
// Input	                                               Output
// ["i", "am", "an", "AI"]	                             "I am an AI."
// ["FIELDS","of","CORN","are","to","be","sown"]	       "FIELDS of CORN are to be sown."
// ["i'm","afraid","I","can't","let","you","do","that"]	 "I'm afraid I can't let you do that."

// Answare:
// let sentencify = (words) => {
//   words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
//   return words.join(" ") + ".";
// };
// console.log(sentencify(["this", "is", "a", "sentence"]));

// ===========================================================================
