// select the elements-->

let ulList = document.querySelector('ul')
let buttonButton = document.querySelector('button')
let inputext = document.queryCommandIndeterm.querySelector('input')

buttonButton.addEventListener('click',function(){
    let text  = inputext.value()
    let newelement = document.createElement('li')
    newelement.textContent = text
    newelement.textContent = "papaya"
    ulList.appendChild(newelement)


    let liList = document.querySelectorAll('li')
    for(let i = 0 ; i < liList.length ; i++){
        liList[i].classList  = "green"
    }
   
})