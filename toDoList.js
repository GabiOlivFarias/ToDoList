var item = document.getElementById("item")
var button = document.querySelector("button")
var myList = document.querySelector(".toDoList")
var itemList = []

button.addEventListener("click", function(){
    var newItem = item.value.trim()
    if (newItem !== "") {
        itemList.push(newItem)
        renderList()
        item.value = ""
    }
})

function renderList() {
    myList.innerHTML = ""
    itemList.forEach(function(task) {
        var buttonDelete = document.createElement("button")
        var buttonCheck = document.createElement("button")
        var checkImage = document.createElement("img")
        var deleteImage = document.createElement("img")
        var listItem = document.createElement("div")
        var p = document.createElement("p")

        checkImage.src = "public/images/check.svg"
        deleteImage.src = "public/images/delete.svg"

        Object.assign(listItem.style, { display: "flex", alignItems: "center" })
        Object.assign(p.style, { backgroundColor: "white", height: "30px", width: "200px" })
        Object.assign(checkImage.style, { backgroundColor: "white", height: "25px", width: "20px" })
        Object.assign(deleteImage.style, { backgroundColor: "white", height: "25px", width: "20px" })
        Object.assign(buttonCheck.style, { backgroundColor: "white", border: "none" })
        Object.assign(buttonDelete.style, { backgroundColor: "white", border: "none" })

        buttonCheck.appendChild(checkImage)
        buttonDelete.appendChild(deleteImage)

        p.textContent = task

        listItem.appendChild(p)
        listItem.appendChild(buttonCheck)
        listItem.appendChild(buttonDelete)
        myList.appendChild(listItem)

        buttonDelete.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#f74040"
            deleteImage.style.backgroundColor = "#f74040"
        })

        buttonDelete.addEventListener("mouseout", function() {
            this.style.backgroundColor = "white"
            deleteImage.style.backgroundColor = "white"
        })

        buttonDelete.addEventListener("click", function() {
            var index = itemList.indexOf(task)
            if (index !== -1) {
                itemList.splice(index, 1)
                listItem.remove()
            }
        })

        buttonCheck.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#00C019"
            checkImage.style.backgroundColor = "#00C019"
        })

        buttonCheck.addEventListener("mouseout", function() {
            this.style.backgroundColor = "white"
            checkImage.style.backgroundColor = "white"
        })

        buttonCheck.addEventListener("click", function() {
            var index = itemList.indexOf(task)
            if (index !== -1) {
                itemList.splice(index, 1)
                p.style.backgroundColor = "#370F40"
                checkImage.style.backgroundColor = "#370F40"
                buttonCheck.style.backgroundColor = "#370F40"
                deleteImage.style.backgroundColor = "#370F40"
                buttonDelete.style.backgroundColor = "#370F40"
            }
        })
    })
}
