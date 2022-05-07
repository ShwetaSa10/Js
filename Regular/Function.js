// // Functions

const { type } = require("cypress/types/jquery")

// const { isArrowFunction, isEnumDeclaration } = require("typescript")

// // function without parameter without retunr type

// function add(){
//     console.log(9+7)
// }

// add()
// add()
// add()
// add()


// // Function with parameter without retunr type

// function add1(x,y){
//     console.log(x+y)
// }
// add1(11,11)
// add1(1,100)
// add1(1,1000)


// // Function without paramter with return type

// // function add2(){
// //     return  
// // }
// // let aa = add2(11,1)
// // console.log(aa)


// // function with parameter and with retunr type


// function add4(x,y){
//     return x+y
// }

// let gg = add4(12,23)
// console.log(gg)
// console.log(gg+gg)
// console.log(gg*100)
// console.log(gg*.10)


// // 3ways of function declation
// // 1) function declation
// // 2) ArrowFunction
// // 3) 

// // 1) with parameter and with retunr type

// function add4(x,y){
//     return x+y
// }

// let ggg = add4(12,23)
// console.log(ggg)

// Function without parameter  and with retunr type
// function delcaration
function class1(){
    return "marks"
}
let aa = class1()
console.log(aa)

// function expression

let a = function(){
     return "marks"
}
console.log(a())

// arrow function

let bb = ()=>{
    return "marks"
}
console.log(bb())

// splice  method
let shweta = [21,22,34,56,78]
let rohit = shweta.splice(1,2,60,50,90)
console.log(rohit)
console.log(shweta)

// reverse

let SR = rohit.reverse()
console.log(SR)

// function with with parameter with retunr type 
function mul(x,y){
    return x*y
}
let mul1 = mul(11,23)
console.log(mul1)
console.log(mul1*0.10)

let a2 = []
let b = []
for(let i =1 ;i<=50 ; i++){
if(i%5==0){
    a2.push(i)
}
else{
    b.push()
}

}
console.log(a2)
console.log(b)

//  2] function without parameter and without return type

// 3] function with parameter and with retunr type
// 4] function with parameter and without  retunr type

let person2 = {
    fullname :"shweta",
    lastname : "kshirsagar",
    age : 23,
    rollno :22
}

let dd = person2.fullname()
console.log(dd)






