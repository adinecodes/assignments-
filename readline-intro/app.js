const readline = require ("readline-sync") 



const myAnswers = ["answer 1", "answer 2", "answer 3"]
const question = "What time is it?"
const results = readline.keyInSelect(myAnswers, question) 
console.log(myAnswers[results])
