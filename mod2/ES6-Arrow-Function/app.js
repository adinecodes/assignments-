// Task 1
// Re-write this .map() using an arrow function:


// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = (arr) => {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }
// console.log(mapVegetables(carrots))

// ================================================================
// Task 2
// Re-write this .filter() using an arrow function:
// const people = [
//   {
//       name: "Princess Peach",
//       friendly: false
//   },
//   {
//       name: "Luigi",
//       friendly: true
//   },
//   {
//       name: "Mario",
//       friendly: true
//   },
//   {
//       name: "Bowser",
//       friendly: false
//   }
// ]

// function filterForFriendly(arr) {
//   return arr.filter(function(person) {
//       return person.friendly
//   })
// }

// const people = [
//   {
//       name: "Princess Peach",
//       friendly: false
//   },
//   {
//       name: "Luigi",
//       friendly: true
//   },
//   {
//       name: "Mario",
//       friendly: true
//   },
//   {
//       name: "Bowser",
//       friendly: false
//   }
// ]

// const filterForFriendly = (arr) => {
//   return arr.filter(function(person) {
//       return person.friendly
//   })
// }
// console.log(filterForFriendly(people))
// ============================================================

// Task 3
// Re-write the following functions to be arrow functions:

// function doMathSum(a, b) {
//   return a + b
// }

// var produceProduct = function(a, b) {
//   return a * b
// }

// const doMathSum = (a, b) => {
//   return a + b
// }

// var produceProduct = (a, b) => {
//   return a * b
// }

// console.log(doMathSum(1,2))
// console.log(produceProduct(1,2))
// ======================================================

// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// const printString = (firstName, lastName, age) => {
//   return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
// }
// console.log(printString("adine", "mateo", 32))
// =========================================================

// Task 5
// Use the shorthand syntax to make the following filter take up one line.
const animals = [
  {
      type: "dog",
      name: "theodore"
  },
  {
      type: "cat",
      name: "whiskers"
  },
  {
      type: "pig",
      name: "piglette"
  },
  {
      type: "dog",
      name: "sparky"
  }
];

const filterForDogs = (arr) => {
  return arr.filter(animal => animal.type === "dog" ? true : false) 
  
}
console.log(filterForDogs(animals))