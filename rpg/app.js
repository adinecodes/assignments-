console.log("Welcome to the Game");
const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log('Hi ' + name + " you have landed on a deserted island!")


let hp = 100

while (hp > 0) {
const action = readline.keyIn("What would you like to do [w] walk,[c] check inventory?", {limit: "wc"})
if (action === "w") {
  walk()
}
}

function walk(){
  console.log("you are walking!")
   Math.floor(Math.random)
   let enemy = Math.floor(Math.random() * 3) + 1 ;
   console.log ('You have encountered a killer Spider')
  
}



