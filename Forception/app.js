var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
  var outPut = []
 for (var i = 0; i < people.length; i++){
outPut.push(people[i])
   for (var j = 0; j < alphabet.length; j++){
outPut.push(alphabet[j])
   }

 }
return outPut
}
console.log(forception(people, alphabet))