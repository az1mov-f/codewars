// 1.
// Question:
// Your Job
// Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

// Answare:
// let sumMul = (a, b) => {
//   let sum = 0;
//   if (a >= b) return "INVALID";
//   else for (let i = a; i < b; i++) !(i % a) && (sum += i);
//   return sum;
// };
// sumMul(2, 9);

// ===========================================================================

// 2.
// Question:
// You are given two sorted arrays that contain only integers.
// These arrays may be sorted in either ascending or descending order.
// Your task is to merge them into a single array, ensuring that:
// The resulting array is sorted in ascending order.
// Any duplicate values are removed, so each integer appears only once.
// If both input arrays are empty, return an empty array.
// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// Answare:
// let mergeArrays = (arr1, arr2) => {
//   let arr = [];
//   [...arr1, ...arr2]
//     .sort((a, b) => a - b)
//     .forEach((value) => !arr.includes(value) && arr.push(value));
//   return arr;
// };
// mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]);

// ===========================================================================

// 3.
// Question:
// https://www.codewars.com/kata/57a55c8b72292d057b000594/javascript

// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
// Example (Input --> Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

// Answare:
// let reverse = (str) => str.split(" ").reverse().join(" ");
// console.log(reverse("I am an expert at this"));

// ===========================================================================

// 4.
// Question:
// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/javascript

// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false.
// Note: The result should be a boolean value, instead of a string.
// The opposite means: All letters of the two strings are the same, but the case is opposite.
// You can assume that the string only contains letters or it's a empty string.
// Also take note of the edge case - if both strings are empty then you should return false/False.
// Examples (input -> output)
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false

// Answare:
// let isOpposite = (s1, s2) => {
//   let isTrue = true;
//   if (s1 && s2 && s1.length == s2.length) {
//     for (let i = 0; i < s1.length; i++) {
//       if (!isTrue) break;
//       s1[i] != s2[i] && s1[i].toUpperCase() == s2[i].toUpperCase()
//         ? (isTrue = true)
//         : (isTrue = false);
//     }
//     return isTrue;
//   } else return false;
// };

// console.log(isOpposite("xpBSHJvVu", "XpbSHjvVU"));
// console.log(isOpposite("ab", "AB"));
// console.log(isOpposite("aB", "Ab"));
// console.log(isOpposite("aBcd", "AbCD"));
// console.log(isOpposite("aBcde", "AbCD"));
// console.log(isOpposite("AB", "Ab"));
// console.log(isOpposite("Ab", "cD"));
// console.log(isOpposite("", ""));

// ===========================================================================

// 5.
// Question:
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/javascript

// Answare:
// let removeChar = (str) => str.slice(1, -1);

// console.log(removeChar("eloquent"));
// console.log(removeChar("country"));
// console.log(removeChar("person"));
// console.log(removeChar("ab"));
// console.log(removeChar("xyz"));

// ===========================================================================

// 6.
// Question:
// https://www.codewars.com/kata/55c933c115a8c426ac000082/javascript

// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

// Answare:
// let evalObject = (obj) => {
//   var result = 0;
//   switch (obj.operation) {
//     case "+":
//       result = obj.a + obj.b;
//       break;
//     case "-":
//       result = obj.a - obj.b;
//       break;
//     case "/":
//       result = obj.a / obj.b;
//       break;
//     case "*":
//       result = obj.a * obj.b;
//       break;
//     case "%":
//       result = obj.a % obj.b;
//       break;
//     case "^":
//       result = obj.a ** obj.b;
//       break;
//   }
//   return result;
// };

// console.log(evalObject({ a: 1, b: 1, operation: "+" }));
// console.log(evalObject({ a: 1, b: 1, operation: "-" }));
// console.log(evalObject({ a: 1, b: 1, operation: "/" }));
// console.log(evalObject({ a: 1, b: 1, operation: "*" }));
// console.log(evalObject({ a: 1, b: 1, operation: "%" }));
// console.log(evalObject({ a: 1, b: 1, operation: "^" }));

// ===========================================================================

// 7.
// Question:
// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/javascript

// Answare:
// let grabDoll = (dolls) => {
//   let bag = [];
//   for (let v of dolls) {
//     if (bag.length == 3) break;
//     else if (v == "Hello Kitty" || v == "Barbie doll") bag.push(v);
//     else continue;
//   }
//   return bag;
// };

// console.log(
//   grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"])
// );

// ===========================================================================

// 8.
// Question:
// https://www.codewars.com/kata/571f1eb77e8954a812000837/javascript

// Answare:
// let animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

// console.log(animal({ name: "dog", legs: 4, color: "white" })); // "This white dog has 4 legs."

// ===========================================================================

// 9.
// Question:
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/javascript

// Answare:
// let giveMeFive = (obj, arr = []) => {
//   for (let key in obj) {
//     if (key.length == 5 && obj[key].length == 5) {
//       arr.push(key);
//       arr.push(obj[key]);
//     } else if (key.length == 5) arr.push(key);
//     else if (obj[key].length == 5) arr.push(obj[key]);
//   }
//   return arr;
// };

// console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }));
// console.log(giveMeFive({ Pears: "than", apple: "sweet" }));

// ===========================================================================

// 10.
// Question:
// https://www.codewars.com/kata/571effabb625ed9b0600107a/javascript

// Answare:
// function getLength(arr) {
//   //return length of arr
//   return arr.length;
// }
// function getFirst(arr) {
//   //return the first element of arr
//   return arr[0];
// }
// function getLast(arr) {
//   //return the last element of arr
//   return arr[arr.length - 1];
// }
// function pushElement(arr) {
//   var el = 1;
//   //push el to arr
//   arr.push(el);
//   return arr;
// }
// function popElement(arr) {
//   //pop an element from arr

//   return arr.slice(0, arr.length - 1);
// }

// ===========================================================================

// 11.
// Question:
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/javascript

// Answare:
// String.prototype.isUpperCase = function () {
//   let res = true;
//   for (let v of this) {
//     if (v != v.toUpperCase()) {
//       res = false;
//       break;
//     }
//   }
//   return res;
// };

// console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase());
// console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase());

// ===========================================================================

// 12.
// Question:
// https://www.codewars.com/kata/55a996e0e8520afab9000055/javascript

// Answare:
// let cookie = (x) => {
//   if (typeof x == "string") return "Who ate the last cookie? It was Zach!";
//   if (typeof x == "number") return "Who ate the last cookie? It was Monica!";
//   return "Who ate the last cookie? It was the dog!";
// };

// console.log(cookie("Ryan"));
// console.log(cookie(11));
// console.log(cookie(15.5));
// console.log(cookie(true));
// console.log(cookie({name:"Eshmat"}));

// ===========================================================================
