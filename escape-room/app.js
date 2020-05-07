const readline = require('readline-sync')
let isAlive = true
let isTrapped = true
let hasKey = false


while(isAlive && isTrapped){
  const action = readline.keyIn('Would you like to [p] Put hand in hole, [o] Open the door, [f] Find the key?', {limit: 'pof'} )
  if(action === 'p'){
    isAlive = false
    console.log('You put your hand in the hole and died')

  } else(isAlive && isTrapped) 
  if (action ==='o'){
    isTrapped = true
    console.log ("You are Trapped!" , "You need the Key to open the door ")

  } else if (isAlive && isTrapped) 
  if (action ==='f') {
    hasKey = true
    console.log ("You are Alive!" , "You Found the Key") 
  }
}