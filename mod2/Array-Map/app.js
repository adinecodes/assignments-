// 1) Make an array of numbers that are doubles of the first array

// function doubleNumbers(arr){
//   return arr.map( num => num * 2 )

// }
// console.log(doubleNumbers([2, 5, 100]));

// 2) Take an array of numbers and make them strings

// function stringItUp(arr){
//   return arr.map(String)
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names

//  function capitalizeNames(arr){
//   let uppClassArr = arr.map(function(string) {
//     return string.toUpperCase()
//   })
//   return uppClassArr 
//  }

//  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]



// 4)Make an array of strings of the names

// function namesOnly(arr){

// return arr.map(x => x.name);

// }
// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

// function makeStrings(arr){
//   let reFormArr = arr.map(arr => {
//     if(arr.age > = 18){
//       console.log(arr.name + ' can go the The Matrix')
//     }else {
//       console.log(arr.name + " is under age!!'")
//     }
//   })
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 

// 6) Make an array of the names in h1s, and the ages in h2s

// function readyToPutInTheDOM(arr){
//  let reFormArr = arr.map(arr => {
// console.log('<h1> ' +arr.name+ "<h1>" + arr.age + '<h2>')
//  })
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));