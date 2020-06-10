const countBtn = document.querySelector('.countBtn button');
const countDwn = document.querySelector('.countDwn');
const countNum = document.querySelector(".countNum h1");


localStorage.setItem('count', 0)
console.log(localStorage.getItem('count'))

countBtn.addEventListener('click', countUp);
countDwn.addEventListener('click', countDown);

function countUp() {
  let currentTotal = localStorage.getItem('count')
  localStorage.setItem('count', +currentTotal + 1)
  countNum.innerHTML = +localStorage.getItem('count')
}

function countDown(){
  let currentTotal =localStorage.getItem('count')
  localStorage.setItem('count', currentTotal - 1)
  countNum.innerHTML = localStorage.getItem('count')
}

//JS Version
let person = {
  name: 'joe',
  age: 32
}

//JSON version
// let person = {
//   "name": "joe",
//   "age": 32
// }

localStorage.setItem('person', JSON.stringify(person))
console.log(JSON.parse(localStorage.getItem('person')))
// JSON.stringify --> turns JS to JSON
// JSON.parse --> turns JSON to JS

// localstorage.setItem("count", "1");
// localstorage.setItem(parseInt(localStorage.getItem('count')) + 1);

