// Make a function that will return any given string into all caps followed by the same string all lowercase.

 function myCoolFunction( str ){
  
   var upperStr = str.toUpperCase();
   var lowerStr = str.toLowerCase();
   var newNew = upperStr.concat(lowerStr);
   return newNew
}
console.log(myCoolFunction("hello"))





// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function randomMath ( num ){
  return Math.floor(num)
}
console.log(randomMath(7.5))


// Make a function that uses slice() and the other functions you've written to return the first half of the string

function newCoolFunction( str ){
  
  var str = str.toUpperCase();
  var newStr = str.slice(0,2)
  return newStr
}
console.log(newCoolFunction("hello"))


// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

function fourthCoolFunction( str ){
  
  var upperStr = str.toUpperCase();
  var sliceUpperStr = upperStr.slice(0,5);
  var lowerStr = str.toLowerCase();
  var sliceLowerStr = lowerStr.slice(6)
  var newNew = sliceUpperStr.concat(sliceLowerStr);
  return newNew
}
console.log(fourthCoolFunction("hello world"))