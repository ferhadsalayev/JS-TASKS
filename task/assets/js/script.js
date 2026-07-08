// /////////1
// function getOddNumbers(n, m) {
//     let oddNumbers = [];
//     for (let i = n; i < m; i++) {
//         if (i % 2 !== 0) {
//             oddNumbers.push(i);
//         }
//     }
//     return oddNumbers;
// }
// console.log("Regular Function Neticesi:", getOddNumbers(10, 30));


// const getOddNumbersArrow = (n, m) => {
//     let oddNumbers = [];
//     for (let i = n; i < m; i++) {
//         if (i % 2 !== 0) {
//             oddNumbers.push(i);
//         }
//     }
//     return oddNumbers;
// };
// console.log("Arrow Function Neticesi:", getOddNumbersArrow(10, 30));

// /////////2
// function sumArray(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("Regular Function cəmi:", sumArray(numbers));

// const sumArrayArrow = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// };
// console.log("Arrow Function cəmi:", sumArrayArrow(numbers));


// /////////3
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function countEvensRegular(a) {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log("Regular funksiya Neticesi:", countEvensRegular(numbers));


// const countEvensArrow = (a) => {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// };
// console.log("Arrow funksiya Neticesi:", countEvensArrow(numbers));


///////4
// function calculateFactorial(m) {
//     let result = 1; 
//     for (let i = 1; i <= m; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log("Regular Function nəticə:", calculateFactorial(5));


// const calculateFactorialArrow = (m) => {
//     let result = 1;
//     for (let i = 1; i <= m; i++) {
//         result *= i;
//     }
//     return result;
// };

// console.log("Arrow Function nəticə:", calculateFactorialArrow(6));


//////5
// function checkPrimeRegular(m) {
//     if (m <= 1) {
//         return "Eded ne sade nede murekkebdir";
//     }

//     let count = 0;
//     for (let i = 1; i <= m; i++) {
//         if (m % i === 0) {
//             count++;
//         }
//     }

//     if (count === 2) {
//         return "Eded sadedir";
//     } else {
//         return "Eded murekkebdir";
//     }
// }
// console.log("Regular Result:", checkPrimeRegular(7));
// console.log("Regular Result:", checkPrimeRegular(10));


// const checkPrimeArrow = (m) => {
//     if (m <= 1) {
//         return "Eded ne sade nede murekkebdir";
//     }

//     let count = 0;
//     for (let i = 1; i <= m; i++) {
//         if (m % i === 0) {
//             count++;
//         }
//     }

//     return count === 2 ? "Eded sadedir" : "Eded murekkebdir";
// };


// console.log("Arrow Result:", checkPrimeArrow(13));
// console.log("Arrow Result:", checkPrimeArrow(1));


//////6
// function task6Regular(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {

//         if (array[i] % 6 > 4) {
//             count++;
//         }
//     }
//     return count;
// }

// const numbers = [1, 5, 10, 11, 12, 17, 23];
// console.log("Regular Result:", task6Regular(numbers));


// const task6Arrow = (array) => {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 6 > 4) {
//             count++;
//         }
//     }
//     return count;
// };

// console.log("Arrow Result:", task6Arrow([1, 2, 3, 4, 5, 6, 11, 17]));