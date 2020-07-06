// Operator to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...arr) {  
//  return arr;
// }

// console.log (collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 

// Write a function that returns a food object with the array names as properties using Object Literals:

// function combineFruit(fruit, sweets, vegetables){
//   return {fruit, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"],  ["cake", "pie"],["carrit"]));

// Use destructuring to use the property names as variables. Desructure the object in the parameter:
// const vacation = {
//   location: "Burly Idaho",
//   duration: "2 weeks",
// };

// function parseSentence({ location, duration }) {
//   return `We're going to have a good time in ${location} for ${duration}`;
// }

// console.log(parseSentence(vacation));

//   Use destructuring to make this code ES6:

// function returnFirst(items) {
//   const [firstItem] = items;
//   return firstItem;
// }
// console.log(returnFirst([3, 4]));

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
// const favoriteActivities = [
//   "magnets",
//   "snowboarding",
//   "philanthropy",
//   "janitor work",
//   "eating",
// ];

// function returnFavorites(arr) {
//   const [some, firstFav, secondFav, another, thirdFav] = favoriteActivities;
//   return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities));


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals(arr1, ...arr) {
//   return arr1.concat(...arr);
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// // Try to make the following function more ES6xy:

// const product = (a, ...b) => {
//   const numbers = [a, ...b];
//   return numbers.reduce((acc, number) => acc * number, 1);
// };

// console.log(product(1, 3, 4, 5, 6));


//   Make the following function more ES6xy. Use at least both the rest and spread operators:

// function unshift(array, ...second) {
//   return array.concat(...second);
// }

// console.log(unshift(["a", "b", "c", "d", "e"], ["a", "b", "c"]));

// Write some destructuring code to help this function out. Use object literals to simplify it:

// function populatePeople(names){
//   return names.map((name) => {
//       name = name.split(" ");
//       const [firstName, lastName] = [...name]
//       const person = {
//           firstName,
//           lastName}
//       return person;
//   })
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))