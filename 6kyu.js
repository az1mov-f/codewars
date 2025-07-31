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
