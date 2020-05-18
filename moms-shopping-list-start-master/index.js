const list = document.getElementById("list");
const form = document.addItem
let shoppingList = []

//Create a function that creates a new list item and displays it on the dom
function addItem (item) {
  //Create Phase
  const newItem = document.createElement("li")  
  const deleteButton = document.createElement("button")
  //Edit Phase
  newItem.textContent = item 
  deleteButton.textContent = "X"
  deleteButton.addEventListener("click", () => handleDelete(item))

  //Append Phase
  list.appendChild(newItem)
  newItem.appendChild(deleteButton)

}

//Add an event listener to the form ( submit)
form.addEventListener("submit", function(event){
  event.preventDefault()
  shoppingList.push(form.title.value)
  const submittedItem = form.title.value
  form.title.value= ""
  addItem(submittedItem)
})

//Create a function that removes all the items from the list
function clearList() {
  //Iterate through each item of the list and remove it
  for(let i = 0; i < list.childNodes.length; i++){
    //Remove Child Method
    list.removeChild(list.childNodes[0])
  }
}


//Create a function that adds all items to the list
function fillList(){
  for(let i = 0; i < shoppingList.lenght; i++){
    addItem(shoppingList[i])
  }
}

//Delete function
function handleDelete(item){
  //Remove the item from the shopping list
  const updatedList = []
  for(let i = 0; i < shoppingList.length; i++){
    if(shoppingList[i] !== item){
      updatedList.push(shoppingList[i])
    }
  }
  shoppingList = updatedList

  clearList()
  fillList()
}


//Edit function
function handleEdit(item){
  //Update the shopping list with the new item
  clearList()
  fillList()
}