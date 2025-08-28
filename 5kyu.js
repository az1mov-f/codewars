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

// 9.
// Question:
// https://www.codewars.com/kata/59be8c08bf10a49a240000b1/javascript

// Answare:
// let changeCase = (str, target) => {
//   if (!str) return "";
//   if (!["snake", "kebab", "camel"].includes(target)) return undefined;
//   if (
//     (str.includes("-") && str.includes("_")) ||
//     (/[A-Z]/.test(str) && str.includes("-")) ||
//     (/[A-Z]/.test(str) && str.includes("_"))
//   )
//     return undefined;

//   if (target == "snake")
//     return str.includes("-")
//       ? str.replace(/-/g, "_")
//       : str.replace(/([A-Z])/g, "_$1").toLowerCase();

//   if (target == "kebab")
//     return str.includes("_")
//       ? str.replace(/_/g, "-")
//       : str.replace(/([A-Z])/g, "-$1").toLowerCase();

//   if (target == "camel")
//     return str.replace(/[-_]([a-z])/g, (_, c) => c.toUpperCase());

//   return undefined;
// };

// console.log(changeCase("snakeCase", "snake"));
// console.log(changeCase("some-lisp-name", "camel"));
// console.log(changeCase("map_to_all", "kebab"));
// console.log(changeCase("doHTMLRequest", "kebab"));
// console.log(changeCase("invalid-inPut_bad", "kebab"));
// console.log(changeCase("valid-input", "huh???"));
// console.log(changeCase("", "camel"));

// ===========================================================================

// 9.
// Question:
// https://www.codewars.com/kata/5270d0d18625160ada0000e4/javascript

// Answare:
// let score = (dice) => {
//   const count = Array(7).fill(0);
//   for (let d of dice) count[d]++;
//   let total = 0;
//   if (count[1] >= 3) {
//     total += 1000;
//     count[1] -= 3;
//   }
//   for (let i = 2; i <= 6; i++) {
//     if (count[i] >= 3) {
//       total += i * 100;
//       count[i] -= 3;
//     }
//   }
//   total += count[1] * 100;
//   total += count[5] * 50;
//   return total;
// };

// console.log(score([5, 1, 3, 4, 1])); // 250
// console.log(score([1, 1, 1, 3, 1])); // 1100
// console.log(score([2, 4, 4, 5, 4])); // 450

// ===========================================================================

// 10.
// Question:
// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/javascript

// Answare:
// let validISBN10 = (str, sum = 0) => {
//   if (str.length != 10 || (str.includes("X") && str.indexOf("X") != 9))
//     return false;
//   Array.from(str).forEach((v, i) => (sum += +(v == "X" ? 10 : v) * (i + 1)));
//   if (isNaN(sum)) return false;
//   if (sum % 11) return false;
//   else return true;
// };

// console.log(validISBN10("1112223339")); // true
// console.log(validISBN10("048665088X")); // true
// console.log(validISBN10("ABCDEFGHIJ")); // false

// ===========================================================================

// 11.
// Question:
// https://www.codewars.com/kata/56f4ff45af5b1f8cd100067d/javascript

// Answare:
// let sortByName = (arr)=> {
//   let ones = ["zero","one","two","three","four","five","six","seven","eight","nine",
//                 "ten","eleven","twelve","thirteen","fourteen","fifteen",
//                 "sixteen","seventeen","eighteen","nineteen"];
//   let tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

//   let toWords = (n) =>
//     n < 20 ? ones[n] :
//     n < 100 ? tens[Math.floor(n/10)] + (n%10 ? " " + ones[n%10] : "") :
//     ones[Math.floor(n/100)] + " hundred" + (n%100 ? " " + toWords(n%100) : "");

//   return arr.slice().sort((a, b) => toWords(a).localeCompare(toWords(b)));
// }

// console.log(sortByName([1,2,3,4]));     // [4, 1, 3, 2]
// console.log(sortByName([99,101,120]));  // [101, 120, 99]
// console.log(sortByName([]));            // []

// ===========================================================================

// 12.
// Question:
// https://www.codewars.com/kata/614ac445f13ead000f91b4d0/javascript

// Answare:
// let valueOfX = (str) => {
//   let [a, b] = str.split(" = ");
//   let hasXLeft = a.includes("x");
//   let exprWithX = hasXLeft ? a : b;
//   let exprWithoutX = hasXLeft ? b : a;
//   let exprValue = eval(exprWithX.replace(/x/g, "0"));
//   let otherValue = eval(exprWithoutX);
//   let coeff = eval(exprWithX.replace(/x/g, "1")) - exprValue;
//   return (otherValue - exprValue) / coeff;
// };

// console.log(valueOfX("0 + 1 = x - 9 - 2"));
// console.log(valueOfX("x = + 2 - 5 + 9"));
// console.log(valueOfX("0 + 1 - x = 9 - 2"));
// console.log(valueOfX("- x = - 1"));
// console.log(valueOfX("- 10 = x"));

// ===========================================================================

// 13.
// Question:
// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/javascript

// 48 - 57 | 1 - 9
// 65 - 90 | A - Z
// 97 - 122 | a - z

// Answare:
// let alphanumeric = (str) => {
//   let isAlphanumeric;
//   if (str) {
//     for (let v of str) {
//       let i = v.charCodeAt();
//       if ((i >= 48 && i <= 57) || (i >= 65 && i <= 90) || (i >= 97 && i <= 122))
//         isAlphanumeric = true;
//       else return false;
//     }
//   } else return false;
//   return isAlphanumeric;
// };

// console.log(alphanumeric("PassW0rd."));
// console.log(alphanumeric("Mazinkaiser"));
// console.log(alphanumeric("hello world_"));
// console.log(alphanumeric("PassW0rd"));
// console.log(alphanumeric("     "));
// console.log(alphanumeric(""));
// console.log(alphanumeric("\n\t\n"));
// console.log(alphanumeric("ciao\n$$_"));
// console.log(alphanumeric("__ * __"));
// console.log(alphanumeric("&)))((("));
// console.log(alphanumeric("43534h56jmTHHF3k"));

// ===========================================================================

// 14.
// Question:
// https://www.codewars.com/kata/5266fba01283974e720000fa/javascript

// Answare:
// let variance = (arr) => {
//   const n = arr.length;
//   const mean = arr.reduce((a, b) => a + b, 0) / n;
//   const sumSq = arr.reduce((sum, v) => sum + (v - mean) ** 2, 0);
//   return +(sumSq / n).toFixed(4);
// };

// console.log(variance([1, 2, 2, 3]));
// console.log(variance([-10, 0, 10, 20, 30]));
// console.log(variance([8, 9, 10, 11, 12]));
// console.log(variance([1.5, 2.5, 4, 2, 1, 1]));
// console.log(variance([10, 20, 50, 0, -100]));
// console.log(variance([1, 2]));
// console.log(variance([-1, -10, -500]));
// console.log(variance([800]));

// ===========================================================================

// 14.
// Question:
// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/javascript

// Answare:
// let findUniq = (arr) => {
//   let obj = {};
//   arr.forEach((str) => {
//     if (str) {
//       for (let s of str) {
//         let miniS = s.toLowerCase();
//         if (obj[miniS]) obj[miniS] += 1;
//         else obj[miniS] = 1;
//       }
//     }
//   });
//   let min = Math.min(...Object.values(obj));
//   for (let key in obj)
//     if (obj[key] === min)
//       return arr.find((str) => str.toLowerCase().includes(key) && str);
// };

// console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
// console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));

// ===========================================================================
