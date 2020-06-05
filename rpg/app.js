console.log(`



`,`



`,"Welcome to the Game");
const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(`



`,'Hi ' + name + " you have landed on a deserted island!")


let hp = 100

const inventory = []

function checkInvetory() {
  console.log(inventory)
}

while (hp > 0) {
  const action = readline.keyIn("What would you like to do [w] walk,[c] check inventory?", {limit: "wc"})
  if (action === "w") {
    walk()
  } else {
    checkInvetory()
  }
}

function walk(){
  console.log(`



`,"you are walking!")
  const randomNum = Math.floor(Math.random() * 3) + 1 ;
  if (randomNum === 3) {

    const enemyArray = ["killer spider","flying monkey","taco the dog"]
    const enemyName = enemyArray[Math.floor(Math.random() * enemyArray.length)]
    const enemyHp = Math.floor(Math.random() * 15) + 15 ;
    const randomEnemy = {name: enemyName, hp: enemyHp}
    console.log (`



`,'You have encountered', randomEnemy.name)
    const action =readline.keyIn ("What would you like to do [a] attack,[r] run?", {limit: "ar"})
    if (action === "a"){

      fightSequence(randomEnemy)
    } else {
      if(Math.floor(Math.random() * 2) + 1 === 1) {
        console.log(`



  `,"you can't escape the enemy")
        fightSequence(randomEnemy)
      }else {

        console.log(`



  `,"I got away")
      }
    }
  } else {
    console.log(`



`,"Lucky me I didn't see any enemies!")
  }
  
}

function fightSequence(enemy){
  console.log(`



`,"I'm fighting " + enemy.name)
  while (hp > 0 && enemy.hp > 0) {

    const myAttack = Math.floor(Math.random() * 20) + 10 ;
    const enemyAttack = Math.floor(Math.random() * 10) + 5 ;
    enemy.hp = enemy.hp - myAttack
    hp = hp - enemyAttack
    console.log(`



  `,"you hit the enemy, the enemy has " + enemy.hp + "hp", "the enemy attacked, you have " + enemyAttack + "hp")
    
  } 
  if (hp > 0){

    const items = ["salsa","water", "coconut milk"]
    const item = items[Math.floor(Math.random()*items.length)]
    inventory.push(item)
    console.log("You have won, enemy has dropped " + item)
  } else {
    console.log ("the enemy hulk smashed you")
  }
  
  
}



