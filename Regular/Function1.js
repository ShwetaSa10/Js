console.log("******************************")
function add(){
    console.log(10+111)
}

add()
add()

console.log("******************************")
function add2(x,y){
    console.log(x+y)
}
add2(12,222)
add2(14,222)

console.log("******************************")
function add3(x,y){
    return x + y 
}

let r = add3(12,13)
console.log(r)
console.log(r+r)

// function declaration



function addition(x,y){
    return x + y
}

let rrr = addition(12,13)
console.log(rrr)


let addtion2 =  function (x,y){
    return x + y
}

let rrra = addition(12,13)
console.log(rrra)


let addition3 = (x,y)=>{
    return x + y
}
let rrraa = addition3(12,13)
console.log(rrraa)


// functions 


// string as a parameter to function 

let names = ["pune","mumbai","delhi"]

let na = names 
na.push("MIRAJ")

console.log(names)
console.log(na)

let pers = {
    firstName:"Anand",
    age:23
}
pers.age = 34
console.log(pers)
let pers2 = pers
console.log(pers2)


// string as a parameter to function
function greet(word){
    console.log('welcome '+word)
}
greet("Anand")



// array as parameter to function


let sumAllArray = [11,22,33,44,55]


function total(arr){

   // let arr = sumAllArray
    console.log(arr) //[11,22,33,44,55]
    arr[0] = 233
    console.log(arr) // [233,22,33,44,55]

}
console.log(sumAllArray) // [11,22,33,44,55]
total(sumAllArray)
console.log(sumAllArray) // [233,22,33,44,55]
 

// array as a paramter to another function 



let si = [11,22,33]

function sumAll(a){

    let rat = a.reduce(function(acc,el){
        return acc  + el
    },0)

    return rat

}

let ccc = sumAll(si)
console.log(ccc)


// object as parameter to function 

let person = {

    fullName:"Ananad",
    age:23
}


let per = person

function info(per){

    //let  per = person
    per.fullName = "Ananad"
    console.log(per)
    return per
}

console.log(person)
let rrrrrr = info(person)
console.log(rrrrrr)
console.log(person)



// -----


function  add(){
    console.log(9+9)
}
add()
add()

 function add2(x,y){
     console.log(x+y)
 }
 add2 (33,22)
 add2(11,2)



 function add3(x,y){
     return x+y
 }
 let sk = add3(12,2)
 console.log(sk)
 console.log(sk+sk)


//  function declaration

function addition (x,y){
    return x+y
}

let rr = addition(33,4)
console.log(rr)
console.log(rr*100)


// function expresion

let add6 = function (x,y){
    return x+y

}

let ff = add6(22,2)
console.log(ff)