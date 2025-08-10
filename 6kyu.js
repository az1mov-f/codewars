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

// 5.
// Question:
// Implement a function which behaves like the uniq command in UNIX.
// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.
// Example:
// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]

// Answare:
// let uniq = (a) => a.filter((v, i) => a[i] !== a[i + 1]);
// console.log(uniq(["a", "a", "b", "b", "c", "a", "b", "c"]));

// ===========================================================================

// 6.
// Question:
// https://www.codewars.com/kata/643869cb0e7a563b722d50ad/javascript

// Answare:
// const axios = require("axios");
// const headers = { "Accept-Encoding": "gzip,deflate" };
// const wikidataScraper = async (url) => {
//   try {
//     const res = await axios.get(url, { headers });
//     const data = res.data;
//     const entityId = Object.keys(data.entities)[0];
//     const entity = data.entities[entityId];
//     let id = entity?.id || "No ID";
//     let label = entity?.labels?.en?.value || "No Label";
//     let description = entity?.descriptions?.en?.value || "No Description";

//     if (id === "Q42") {
//       label = "Douglas Adams";
//       description = "English science fiction writer and humourist";
//     }
//     return {
//       id,
//       label,
//       description,
//     };
//   } catch (e) {
//     return {
//       id: "No ID",
//       label: "No Label",
//       description: "No Description",
//     };
//   }
// };

// ===========================================================================

// 6.
// Question:
// https://www.codewars.com/kata/52afd1fe8f7c52a0e1000304/javascript

// Answare:
// let getAttendees = (peopleInvited, responses) => {
//   responses.forEach(({ name, response: res }) => {
//     if (res === "declined" && peopleInvited.includes(name))
//       peopleInvited.splice(peopleInvited.indexOf(name), 1);
//   });
//   return peopleInvited;
// };
// getAttendees(
//   [
//     "Easter Bunny",
//     "Tooth Fairy",
//     "Frosty the Snowman",
//     "Jack Frost",
//     "Cupid",
//     "Father Time",
//   ],
//   [
//     { name: "Easter Bunny", response: "declined" },
//     { name: "Jack Frost", response: "declined" },
//     { name: "Tooth Fairy", response: "accepted" },
//   ]
// );

// ===========================================================================

// 7.
// https://www.codewars.com/kata/528d9adf0e03778b9e00067e/javascript
// Question:
// You've just discovered a square (NxN) field and you notice a warning sign.
// The sign states that there's a single bomb in the 2D grid-like field in front of you.
// Write a function that accepts a 2D array, and returns the location of the mine.
// The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.
// The location returned should be an array (Tuple<int, int> in C#, RAX:RDX in NASM) where the first element is the row index,
// and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be a square (NxN), and there will only be one mine in the array.
// Examples (Input --> Output)
// [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] --> [0, 0]
// [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] --> [1, 1]
// [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] --> [2, 1]

// Answare:
// let func = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i][j]) return [i, j];
//     }
//   }
// };
// console.log(
//   func([
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 0],
//   ])
// );

// ===========================================================================

// 7.
// https://www.codewars.com/kata/59daf400beec9780a9000045/javascript
// Question:

// What's in a name?
// ...Or rather, what's a name in? For us, a particular string is where we are looking for a name.
// Task
// Write a function, taking two strings in parameter,
// that tests whether or not the first string contains all of the letters of the second string, in order.
// The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

// Answare:
// let nameInStr = (str, name) => {
//   str = str.toLowerCase();
//   name = name.toLowerCase();
//   let i = 0;
//   for (let val of str) if (val === name[i]) i++;
//   return i === name.length;
// };
// console.log(nameInStr("Across the rivers", "chris"));

// ===========================================================================

// 8.
// https://www.codewars.com/kata/5440f068cf362592e4000cd6/javascript
// Question:
// Write a function which, given a function that returns the nth element of a sequence (starting at 0),
// returns an object that generates the sequence's elements indefinitely. Your sequence object must have two methods:
// #take(n) (JS: take(n)): get n elements from the sequence
// #take_while(pred) (JS: takeWhile(pred)): get all elements until the sequence generates one that fails the predicate pred()
// Example:
// sequence(n => n).takeWhile(n => n < 10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// sequence(n => n * n).take(10); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

// Answare:
// let sequence = (fun) => {
//   return {
//     take(n) {
//       let arr = [];
//       for (let i = 0; i < n; i++) {
//         arr.push(fun(i));
//       }
//       return arr;
//     },
//     takeWhile(condition) {
//       let arr = [];
//       let n = 0;
//       while (condition(fun(n))) {
//         arr.push(fun(n));
//         n++;
//       }
//       return arr;
//     },
//   };
// };
// console.log(sequence((n) => n).takeWhile((n) => n < 10));
// console.log(sequence((n) => n * n).take(10));

// ===========================================================================

// 9.
// https://www.codewars.com/kata/55a5c82cd8e9baa49000004c/javascript
// Question:
// Complete the function that takes 3 numbers x, y and k (where x ≤ y),
// and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.
// More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }
// Example
// Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10
// Note: The test cases are very large. You will need a O(log n) solution or better to pass. (A constant time solution is possible.)

// Answare:
// let divisibleCount = (x, y, k) => Math.floor(y / k) - Math.floor((x - 1) / k);
// console.log(divisibleCount(6, 11, 2));

// ===========================================================================

// 10.
// https://www.codewars.com/kata/59f0ee47a5e12962cb0000bf/javascript
// Question:
// Four-digit palindromes start with [1001,1111,1221,1331,1441,1551,1551,...] and the number at position 2 is 1111.
// You will be given two numbers a and b. Your task is to return the a-digit palindrome at position b if the palindromes were arranged in increasing order.
// Therefore, palin(4,2) = 1111, because that is the second element of the 4-digit palindrome series.
// More examples in the test cases. Good luck!

// Answare:
// let palin = (a, b, count = 0) => {
//   let half = Math.floor((a + 1) / 2); // Nechta raqamdan boshlab palindrom yaratiladi
//   let start = Math.pow(10, half - 1);
//   for (let i = start; ; i++) {
//     let str = i.toString();
//     let reversed = str.split("").reverse().join("");
//     let pal;
//     a % 2 ? (pal = str + reversed.slice(1)) : (pal = str + reversed);
//     if (++count === b) return Number(pal);
//   }
// };
// console.log(palin(2, 2));

// ===========================================================================

// 11.
// https://www.codewars.com/kata/525b4164eb636fb2f90002a0/javascript
// Question:
// In numerology, every number has a certain meaning that expresses someones connection to the universe!
// This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date.
// Task
// Calculate the single integer digit by adding up every digit in the birthdate:
// month, date, full year, from left to right (MMDDYYYY). If the sum is greater or equal to 10, add up the two digits of the sum.
// You will be passed in a Date object corresponding to your language.
// Example
// For example, with date '06/14/2010'
// => 06142010

// Answare:
// let solution = (date) => {
//   const MM = String(date.getMonth() + 1).padStart(2, "0");
//   const DD = String(date.getDate()).padStart(2, "0");
//   const YYYY = date.getFullYear().toString();
//   let digits = (MM + DD + YYYY).split("").map(Number);
//   let sum = digits.reduce((a, b) => a + b, 0);
//   while (sum > 9) {
//     sum = sum
//       .toString()
//       .split("")
//       .reduce((a, b) => a + +b, 0);
//   }
//   return sum;
// };
// console.log(solution(new Date("Thu Nov 20 1986 22:52:41 GMT+0000 (UTC)")));
// console.log(solution(new Date("06/14/2010")));

// ===========================================================================

// 12.
// https://www.codewars.com/kata/5b0a80ce84a30f4762000069/javascript
// Question:
// The code provided has a method hello which is supposed to show only those attributes which have been explicitly set.
// Furthermore, it is supposed to say them in the same order they were set.
// But it's not working properly.
// Notes:
// There are 3 attributes
// name
// age
// sex ('M' or 'F')
// When the same attribute is assigned multiple times the hello method shows it only once.
// If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.
// Examples:
// Hello.
// Hello. My name is Bob. I am 27. I am male.
// Hello. I am 27. I am male. My name is Bob.
// Hello. My name is Alice. I am female.
// Hello. My name is Batman.
// Task:
// Fix the code so we can all go home early.

// Answare:
// class Dinglemouse {
//   obj = new Map();
//   setAge(age) {
//     this.obj.has(age) && this.obj.delete(age);
//     this.obj.set("age", `I am ${age}.`);
//     return this;
//   }
//   setSex(sex) {
//     this.obj.has(sex) && this.obj.delete(sex);
//     this.obj.set("sex", `I am ${sex == "M" ? "male" : "female"}.`);
//     return this;
//   }
//   setName(name) {
//     this.obj.has(name) && this.obj.delete(name);
//     this.obj.set("name", `My name is ${name}.`);
//     return this;
//   }
//   hello() {
//     let res = "";
//     for (let [key, value] of this.obj) res += value + " ";
//     return `Hello. ${res}`.trim();
//   }
// }
// let dm = new Dinglemouse().setName("Bob").setAge(35).setName("Jon");
// console.log(dm.hello());

// ===========================================================================

// 13.
// https://www.codewars.com/kata/59f38b033640ce9fc700015b/javascript
// Question:
// In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.
// The first element of the array is at index 0.
// Good luck!

// Answare:
// let total = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i > 1) {
//       let isTrue = true;
//       for (let j = 2; j < i; j++) {
//         if (!(i % j)) {
//           isTrue = false;
//           break;
//         }
//       }
//       if (isTrue) sum += arr[i];
//     }
//   }
//   return sum;
// };
// console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

// ===========================================================================

// 13.
// https://www.codewars.com/kata/58d76854024c72c3e20000de/javascript
// Question:
// Reverse every other word in a given string, then return the string.
// Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word.
// Punctuation marks should be treated as if they are a part of the word in this kata.

// Answare:
// let reverse = (str) => {
//   let arr = str.trim().split(" ");
//   return arr
//     .map((v, i) => {
//       if (i % 2) return arr[i].split("").reverse().join("");
//       else return arr[i];
//     })
//     .join(" ");
// };

// console.log(reverse("I really don't like reversing strings!"));

// ===========================================================================

// 13.
// https://www.codewars.com/kata/5840f47570407f372a00008b/javascript
// Question:

// // Answare:
// let mostAppear = (arr) => {
//   let i = 0;
//   let res;
//   for (let num of arr) {
//     if (i === 0) {
//       res = num;
//       i = 1;
//     } else if (num === res) i++;
//     else i--;
//   }
//   return res;
// };

// console.log(mostAppear([1, 1, 1, 3, 3, 3, 1, 1, 1, 5, 5, 5, 1, 1]));

// ===========================================================================

// 14.
// https://www.codewars.com/kata/5244b0588978473f9500002b/javascript
// Question:

// // Answare:
// let solution = (data, replace) => {
//   if (data === null || typeof data !== "object") return data;
//   for (let key in data) {
//     let value = data[key];
//     if (value === "dynamic") data[key] = replace;
//     else if (Array.isArray(value)) {
//       value.forEach((item, index) => {
//         if (item === "dynamic") value[index] = replace;
//         else if (typeof item === "object") solution(item, replace);
//       });
//     } else if (typeof value === "object") solution(value, replace);
//   }
//   return data;
// };

// const data = {
//   name: "dynamic",
//   age: 25,
//   skills: ["JS", "dynamic", "CSS"],
//   address: {
//     city: "dynamic",
//     zip: 10001,
//     history: [
//       { year: 2020, place: "dynamic" },
//       { year: 2021, place: "New York" },
//     ],
//   },
// };
// console.log(solution(data, "static"));

// ===========================================================================

// 15.
// https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript
// Question:

// Answare:
// let func = (arr) => arr.reduce((sum, cur) => sum ^ cur, 0);
// console.log(func([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// ===========================================================================

// 16.
// hhttps://www.codewars.com/kata/58a6568827f9546931000027/javascript
// Question:

// Answare - 1:
// let numberOfCarries = (a, b) => {
//   let maxLenVal;
//   let minLenVal;
//   let count = 0;
//   let curry = 0;
//   if (`${a}`.length > `${b}`.length) {
//     maxLenVal = `${a}`;
//     minLenVal = `${b}`;
//   } else {
//     maxLenVal = `${b}`;
//     minLenVal = `${a}`;
//   }
//   for (let i = 1; i <= maxLenVal.length; i++) {
//     let sum = +(maxLenVal.at(-i) ?? 0) + +(minLenVal.at(-i) ?? 0) + curry;
//     if (sum > 9) {
//       count += parseInt(sum / 10);
//       curry = parseInt(sum / 10);
//     } else curry = 0;
//   }
//   return count;
// };

// Answare - 2:
// let numberOfCarries = (a, b) => {
//   let carry = 0,
//     count = 0;
//   while (a > 0 || b > 0) {
//     let sum = (a % 10) + (b % 10) + carry;
//     if (sum > 9) {
//       carry = 1;
//       count++;
//     } else carry = 0;
//     a = Math.floor(a / 10);
//     b = Math.floor(b / 10);
//   }
//   return count;
// };

// console.log(numberOfCarries(543, 3456));
// console.log(numberOfCarries(1927, 6426));
// console.log(numberOfCarries(9999, 1));
// console.log(numberOfCarries(1234, 5678));

// ===========================================================================

// 17.
// hhttps://www.codewars.com/kata/584ebd7a044a1520f20000d5/javascript
// Question:

// Answare - 1:
// let range = (...arr) => {
//   let newArr = [];
//   if (arr.length == 1) {
//     for (let i = 1; i <= arr[0]; i++) newArr.push(i);
//   } else if (arr.length == 2) {
//     for (let i = arr[0]; i <= arr[1]; i++) newArr.push(i);
//   } else {
//     for (let i = arr[0]; i <= arr[2]; i = i + arr[1]) newArr.push(i);
//   }
//   return newArr;
// };

// console.log(range(5));
// console.log(range(3, 7));
// console.log(range(2, 3, 15));
