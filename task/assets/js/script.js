//1
// function GetOddNumbers(n, m) {
//     let OddNumbers = [];

//     for (let i = n; i < m; i++) {
//         if (i % 2 !== 0) {
//             OddNumbers.push(i);

//         }
//     }

//     return OddNumbers;
// }

// let result1 = GetOddNumbers(10, 30);
// console.log("Regular Function Neticesi:", result1);



// const GetOddNumbersArrow = (n, m) => {
//       let OddNumbers2 = [];

//       for (let i = n; i < m; i++) {
//          if (i % 2 !== 0) {
//             OddNumbers2.push(i);
//         }
//     }

//     return OddNumbers2;
// };

// let result2 = GetOddNumbersArrow(10, 30);
// console.log("Arrow Function Neticesi:", result2);

//2
// function sumArray(arr) {
//     let result = 0;

//     for  (let i = 0; i < arr.length; i++) {
//           result += arr[i]; 
//     }

//     return result; 
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = sumArray(numbers); 

// console.log("Regular Function nəticəsi:", total);


// const  sumArrayArrow = (arr) => {
//     let result = 0;

//     for  (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }

//     return result;
// };



// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("Arrow Function nəticəsi:", sumArrayArrow(numbers2));


//3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function countEvens(a) {
    let count = 0;
    for (let i = 0; i = i.length; i++) {
        if (a[i] % 2 === 0) {
            count++;
        }
    }
    return count;

}

console.log(countEvens(numbers));


let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function countEvens(a){
    let count = 0;
    for  (let i = 0; i < a.length i++){
        if (a[i] % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(countEvens(numbers));