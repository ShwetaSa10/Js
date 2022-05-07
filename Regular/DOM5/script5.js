
// selecting 
let ulList = document.querySelector('#uol')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#addButton')
let liList = document.querySelectorAll('li') //[li,li,li,li]

for (let i = 0; i < liList.length; i++) {
    createButton(liList[i])
}

//document.getElementById('uol')

console.log(ulList)
console.log(inputText)
console.log(buttonA)


buttonA.addEventListener('click', function () {
    let text = inputText.value
    let liList = document.createElement('li')
    liList.textContent = text
    createButton(liList)
    ulList.appendChild(liList)
})


ulList.addEventListener('click', function (e) {
    if (e.target.tagName === "BUTTON") {
        // remove 
        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        // up 

        if (e.target.className === "up") {



        }


        // down

        if (e.target.className === "dowm") {



        }


    }




})

function createButton(li) {
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.className = "remove" // <button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" // <button>Up</button>
    up.className = "up" // <button class = "up">Up</button>
    li.appendChild(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" // <button>Down</button>
    down.className = "down" // <button class = "down">Down</button>
    li.appendChild(down)

}