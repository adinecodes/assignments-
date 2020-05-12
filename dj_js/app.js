var item = document.getElementById("square");
item.addEventListener("mouseover", func, false);

function func(){  
  item.setAttribute("style", "background-color:blue;")
}

item.addEventListener("mousedown", mouseDown, );
item.addEventListener("mouseup", mouseUp, );

function mouseDown() {  
  item.setAttribute("style" , "background-color:red;")
}
function mouseUp() { 
  item.setAttribute("style", "background-color:yellow")
}
document.addEventListener("wheel", scroll);
function scroll () {
  item.setAttribute("style", "background-color:orange")
}

window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(event){
  console.log(event)
  if (event.keyCode === 66){
    console.log(item)
    item.setAttribute("style", "background-color:blue;")
  } else if  (event.keyCode === 82){
      item.setAttribute("style" , "background-color:red;")
  } else if ( event.keyCode ===89) {
  item.setAttribute("style" , "background-color:yellow")
}else if ( event.keyCode ===71) {
item.setAttribute("style" , "background-color:green")
}else if ( event.keyCode ===79)
item.setAttribute("style" , "background-color:orange")
} 


