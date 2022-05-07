let headingOne = document.querySelector("h1")
let para = document.querySelector('p')

headingOne.addEventListener('click',function(){
headingOne.style.color = "blue"
headingOne.style.background = "yellow"
})

para.addEventListener('mouseover',function(){
    para.style.backgroundColor = "pink"
    para.style.color = "black"
})

//  document is a object  and queryselector is a method
