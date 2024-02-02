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
            var listItem = document.createElement("div")
            var p = document.createElement("p")
            var button = document.createElement("button")
            var checkImage = document.createElement("img")
            checkImage.src = "public/images/check.svg"
            Object.assign(listItem.style, { display: "flex",    
                                            alignItems: "center" })
            Object.assign(p.style, { backgroundColor: "white",
                                     height: "30px",
                                     width: "200px" })
            Object.assign(checkImage.style, { 
                height: "23px",
                                     width: "20px" })
            button.appendChild(checkImage)
            p.textContent = task
            listItem.appendChild(p)
            listItem.appendChild(button)
            myList.appendChild(listItem)
        })
        item.value = ""
    }
})
