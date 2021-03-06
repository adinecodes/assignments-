 // 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
  return arr.reduce((total, amount) => total + amount)
  
}

console.log(total([1,2,3])); // 6

// 2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
  return arr.reduce(function(string, num) {
		return string + num;
	}, "");
}




console.log(stringConcat([1,2,3])); // "123"

// 3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
  return arr.reduce((count, voter) => count + voter.voted, 0)

  }

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
  return arr.reduce((count, wish) => count + wish.price, 0 )
}

var wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 5)Given an array of arrays, flatten them into a single array

function flatten(arr) {
    return arr.reduce( (a, b) => a.concat(b))
}

var arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6) Given an array of potential voters, return an object representing the results of the vote


var voters = [  
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
return arr.reduce(function(voterResults, voter) {
  if (voter.age >= 18 && voter.age <= 25) {
    if (voter.voted) {
      voterResults.youngVotes++;
    }
    voterResults.youth++;
  } else if (voter.age >= 26 && voter.age <= 35) {
    if (voter.voted) {
      voterResults.midVotes++;
    }
    voterResults.mids++;
  } else if (voter.age >= 36 && voter.age <= 55) {
    if (voter.voted) {
      voterResults.oldVotes++;
    }
    voterResults.olds++;
  }
  return voterResults;
}, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0});
}

console.log(voterResults(voters));


// Returned value shown below:
/*
{ youngVotes: 1,
youth: 4,
midVotes: 3,
mids: 4,
oldVotes: 3,
olds: 4 
}
*/

// +++++++++++++++++++++++++++++++++++++++++++++

// Multiple Array Methods Part 1





var peopleArray = [
  {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
  },
  {
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
  },
  {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
  },
  {
      firstName: "Morty",
      lastName: "Smith",
      age: 29
  },
  {
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
  },
  {
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
  },
  {
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
  }
]

function sortedOfAge(arr){
  const peopleOverAge = arr.filter(people => {
      return people.age > 18
  })
  const finished = peopleOverAge.sort((a, b) => {
      return a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
  }) 
  return finished.map(names => {
      return '<li>' + names.firstName + ' ' + names.lastName + ' ' + 'is' + ' ' + names.age + '</li>'
  })
}      

console.log(sortedOfAge(peopleArray));

/*
Output: 
[ 
   "<li>Kyle Mooney is 27</li>",
   "<li>Sarah Palin is 47</li>",
   "<li>Rick Sanchez is 78</li>",
   "<li>Morty Smith is 29</li>",
   "<li>Lev Tolstoy is 82</li>" 
]
*/
