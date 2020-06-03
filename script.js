let addItem = document.querySelector("#in")
let addButton = document.querySelector("#add")
let divs = document.getElementById("divs")
let close = new Array(...document.getElementsByClassName("close"))
let count = document.getElementById("count")


function remove() {
    this.parentNode.remove()
    count.textContent -= 1
}

addButton.onclick = function() {
    if (addItem.value.trim() != "") {
        let value = addItem.value;
        addItem.value = "";
        let mainDiv = document.createElement("div")
        let p = document.createElement("p")
        p.textContent = value
        let secondDiv = document.createElement("div")
        let img = document.createElement("img")
        secondDiv.appendChild(img)
        mainDiv.classList.add("list")
        secondDiv.classList.add("close")
        secondDiv.onclick = remove
        img.src = "./close.png"
        img.style.width = "16px"
        mainDiv.appendChild(p)
        mainDiv.appendChild(secondDiv)
        divs.appendChild(mainDiv)
        count.textContent = +count.textContent + 1
    }
}

close.forEach(e => {
    count.textContent = +count.textContent + 1
    e.onclick = remove
})