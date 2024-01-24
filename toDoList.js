var item = document.getElementById("item")
var button = document.querySelector("button")
var makeToDoList = document.querySelector(".makeToDoList")
var myList = document.querySelector(".toDoList")
var itemList = []

button.addEventListener("click", function(){
    var newItem = item.value.trim()
    if (newItem !== "") {
        itemList.push(newItem)
        myList.innerHTML = ""
        itemList.forEach(function(task) {
            var p = document.createElement("p")
            p.textContent = task
            myList.appendChild(p)
        })
        item.value = ""
    }
})