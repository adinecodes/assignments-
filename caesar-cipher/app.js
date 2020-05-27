const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? ')); 
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let newMessage = '';


for (let i = 0; i < input.length; i++) {
  // console.log(i)
  // console.log(input[i])
  //console.log(input[i])
  newMessage = newMessage.concat(alphabet[alphabet.indexOf(input[i])+shift]

 
  )
}
console.log(newMessage)