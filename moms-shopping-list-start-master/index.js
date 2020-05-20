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

  shoppingList.push(item)
}

//Add an event listener to the form ( submit)
form.addEventListener("submit", function(event){
  event.preventDefault()
  const submittedItem = form.title.value
  form.title.value= ""
  addItem(submittedItem)
})

//Create a function that removes all the items from the list
function clearList() {
  //Iterate through each item of the list and remove it
  while(list.childNodes[0]){
    //Remove Child Method
    list.removeChild(list.childNodes[0])
  }
  shoppingList = []
 
  
}


//Create a function that adds all items to the list
function fillList(arr){
 
  for(let i = 0; i < arr.length; i++){
    addItem(arr[i])
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
 
  clearList()
  fillList(updatedList)
}


//Edit function
function handleEdit(item){
  //Update the shopping list with the new item
  clearList()
  fillList()
}