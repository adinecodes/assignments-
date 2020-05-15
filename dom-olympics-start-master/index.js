var header = document.getElementById("header")

// Creates new elements such as <h1></h1> or others
let h1 = document.createElement("h1")
let div = document.createElement('div')
let p = document.createElement("p")
let span = document.createElement('span')

// Adds text inside an element such as <h1>JavaScript Made This!!</h1>
h1.textContent = "JavaScript Made This!"
span.textContent = 'Adine'
p.textContent = " wrote the JavaScript"

// Anything with .style after it is referencing css
// The equivolent to line 16 in CSS would be div { text-align: center }
div.style.textAlign = 'center'
p.style.display = 'inline'

// is just adding an id to our span tag.  <span id='name'></span>
span.id = 'name'


// The first word is adding the second inside of it. Example on line 24 <header><h1></h1></header>
header.appendChild(h1)
div.appendChild(span)
div.appendChild(p)
header.appendChild(div)

document.getElementById("clear-button").addEventListener("click", function() {
const messages = document.getElementsByClassName("messages")[0]
messages.innerHTML = ""
// const messagesLength = document.getElementsByClassName("messages")[0].children.length
// for ( let i = 0; i < messages.length; i++) {
//   messages.removeChild( messages.children[i])
// }
})



