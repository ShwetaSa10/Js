x= 10
console.log(x)

c = [11,22,33,44,55,66]
console.log(c[2])

for(let i = 0 ;i<=10 ; i++){
    console.log(i)
}

// for(initialization ; condition check ; increment/decrement){
//     statements
// }

// Everything object in javascript

// Object - Methos and propeties
// Vehicle-

// property - color, modeName, regno
// method - Start(),stop()

// Object  - Human

// property - Heigh, weight
// method - walking(),talking(),eating()


// Methos in Array
// 1)Push()

// action - Add element at last into the array
// return - New length of array
names = ["shweta","sumit","akshay"]
let aa = names.push("akshay")
console.log(aa)
console.log(names)


// 2)unshift()

// action - add the element at the first
// return - new length of array

let bb = names.unshift("rohit")
console.log(bb)
console.log(names)


// 3)pop()


// action - remove last element from array
// return - same element 
names1 = ["shweta","sumit","akshay"]
 let cc = names1.pop()
 console.log(cc)
 console.log(names1)

// 4) Unshift

// action - removes the lemment from first
// retunr same element
 
names2= ["shweta","sumit","akshay"]
 let ccc = names1.shift()
 console.log(ccc) // shweta
 console.log(names2)  // ["sumit","akshay"]

//  index of ()
// search the element and retunr index
// if element is not found retunrs -1

let vegitables = ["tomato","potato","brinjal","onion"]

let aaa = vegitables.indexOf('potato')
console.log(aaa)

// inclues()
// search the elemtn 
//  if the element is found returns true elase return false


let bbb = vegitables.includes('onion')
console.log(bbb)

let cccc = vegitables.includes('Corn')
console.log(cccc)

// sort 
// action - sort the string rray alphabetically
// return new array

let jj = vegitables.sort()
console.log(jj)


// reverse
// reverse the array and return reversed

let kkk = vegitables.reverse()
console.log(kkk)

// flat()

let number = [[11,22,33],[44,45,46],[67,68,69]]

let ll = number.flat()
console.log(ll)



/********************************************************************************************/

const { add } = require("cypress/types/lodash")

let x = 10
console.log(x)
console.log(typeof x)

// const

// const e = 100
// e = 400

// arithmatic operator - +,-,/,*,%

let b = 100
let c = 200

console.log(b+c)
console.log(b-c)
console.log(b/c)
console.log(b%c)
console.log(b*c)

//  10 pair -->50
console.log('---------------------------------------')

function Calculator(x,y){
   console.log (x+y)
   console.log (x-y)
   console.log (x*y)
   console.log (x/y)
   console.log (x%y)


}
Calculator(12,5)


// function without parameter and without retunr type

function add1(){
console.log(10+10)
}
add1(666,6)
