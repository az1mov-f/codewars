// 1.
// Question:
// https://www.codewars.com/kata/5324945e2ece5e1f32000370/javascript

// Answare:
// let sumStrings = (a, b) => `${BigInt(a) + BigInt(b)}`;

// console.log(sumStrings("1", "2"));
// console.log(
//   sumStrings("712569312664357328695151392", "8100824045303269669937")
// );
// console.log(
//   sumStrings("50095301248058391139327916261", "81055900096023504197206408605")
// );

// ===========================================================================

// 2.
// Question:
// https://www.codewars.com/kata/51e056fe544cf36c410000fb

// Answare:
// let topThreeWords = (str) => {
//   str = str.toLowerCase().replace(/[^a-z']/g, " ");
//   let arr = str.split(/\s+/);
//   let obj = {};
//   arr.forEach((s) => {
//     if (s.replace(/'/g, "") === "") return;
//     obj[s] ? (obj[s] += 1) : (obj[s] = 1);
//   });
//   return Object.entries(obj)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 3)
//     .map((a) => a[0]);
// };

// console.log(test("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
// console.log(test("a a a  b  c c  d d d d  e e e e e"));

// ===========================================================================

// 3.
// Question:
// https://www.codewars.com/kata/52f677797c461daaf7000740/javascript

// Answare:
// let solution = (arr) => {
//   let gcd = (a, b) => {
//     while (b) {
//       let t = b;
//       b = a % b;
//       a = t;
//     }
//     return a;
//   };
//   let g = arr[0];
//   for (let i = 1; i < arr.length; i++) g = gcd(g, arr[i]);
//   return g * arr.length;
// };

// console.log(solution([60, 12, 96, 48, 60, 24, 72, 36, 72, 72, 48]));
// console.log(solution([71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]));
// console.log(solution([6, 9, 12]));

// ===========================================================================
