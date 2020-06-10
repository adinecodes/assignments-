var goombaInputElem = document.querySelector("#goomba");
var bobombInputElem = document.querySelector("#bobomb");
var cheepInputElem = document.querySelector("#cheep");

goombaInputElem.addEventListener("change", function() {
  var goombaInputValue = parseInt(goombaInputElem.value);
  var bobombInputValue = parseInt(bobombInputElem.value);
  var cheepInputValue = parseInt(cheepInputElem.value);
  if (isNaN(goombaInputValue) || isNaN(bobombInputValue) || isNaN(cheepInputValue)) {
    document.querySelector("#mytotal").innerHTML = 0;
  } else {
    document.querySelector("#mytotal").innerHTML = (goombaInputValue * 5) + (bobombInputValue * 7) + (cheepInputValue * 11);
    // document.querySelector("#num1").innerHTML = (goombaInputValue * 5);
    

  }
})

bobombInputElem.addEventListener("change", function () {
  var goombaInputValue = parseInt(goombaInputElem.value);
  var bobombInputValue = parseInt(bobombInputElem.value);
  var cheepInputValue = parseInt(cheepInputElem.value);

  if (isNaN(goombaInputValue) || isNaN(bobombInputValue) || isNaN(cheepInputValue)) {
    document.querySelector("#mytotal").innerHTML = 0;
  } else {
    document.querySelector("#mytotal").innerHTML = (goombaInputValue * 5) + (bobombInputValue * 7) + (cheepInputValue * 11);
    // document.querySelector("#num2").innerHTML = (bobombInputValue * 7);
  }
})


cheepInputElem.addEventListener("change", function() {
 
  if (isNaN(goombaInputValue) || isNaN(bobombInputValue) || isNaN(cheepInputValue)) {
    document.querySelector("#mytotal").innerHTML = 0;
  } else {
    document.querySelector("#mytotal").innerHTML = (goombaInputValue * 5) + (bobombInputValue * 7) + (cheepInputValue * 11);
    // document.querySelector("#num3").innerHTML = (cheepInputValue * 11);
  }

var goombaInputValue = parseInt(goombaInputElem.value);
var bobombInputValue = parseInt(bobombInputElem.value);
var cheepInputValue = parseInt(cheepInputElem.value);
if (isNaN(goombaInputValue) || isNaN(bobombInputValue) || isNaN(cheepInputValue)) {
  document.querySelector("#mytotal").innerHTML = 0;
} else {
  document.querySelector("#mytotal").innerHTML = (goombaInputValue * 5) + (bobombInputValue * 7) + (cheepInputValue * 11);

}})