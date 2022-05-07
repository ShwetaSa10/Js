const { indexOf } = require("cypress/types/lodash")

let info = ["shweta","kshirsagar",11,22]

let  person= {
    firstName:"shweta",
    lastName : "kshirsagar",
    rollno : 11,
    age : 13
}

// retrive

console.log(person.firstName)
console.log(person['firstName' ])


// add

console.log(person.language = "Marathi")
console.log(person['lang'] = "hindi")

// update

person.age = 27
person['age'] = 33
console.log(person)


// delete 

delete person.age 
delete person['age']
console.log(person)


/*--------------------------------------------------------------------*/

for (let key in person){
    console.log(key,person[key])
}

// string 
//  Object - property and method


let numbers = [22,10.13,13,133]
console.log(typeof numbers)

let x = 10
console.log(typeof x)

let test = true
console.log(test)

let namee = "shweta"
console.log(typeof namee)

let city = "pune"
console.log(city[0])
console.log(city[2])


let names = ["shweta","smita","sumit","akshay"]

for(let i = 0; i < names.length ; i++){
    // console.log(i)      0 1 2 3
    console.log(names[i])
}

let firstName = "shweta"
for(let i = 0 ; i<firstName.length ; i++){
    console.log(firstName[i])
}


// rever  for loop

for (let i = 5 ; i >= 0 ; i --){
    console.log(firstName[i])
}


// string ===> Object ==> property and method

// method - action
// return type

let state = "Rajasthan"
let rrr = state.toUpperCase()
console.log(rrr)

let o = state.toLocaleLowerCase()
console.log(o)

let jkl = state.includes('s')
console.log(jkl)

let jkl2 = state.includes('r')
console.log(jkl2)

// Method chaining


// let city1 = "Miraj"
// city1.toUpperCase().toLowerCase().length

// let t = city1.indexOf('M')
// console.log(t)


let mn = " rohit"
console.log(mn.length)
let kk = mn.trimStart()
console.log(kk.length)

let mn1 = "rohit "
console.log(mn1.length)
let kk1 = mn.trimEnd()
console.log(kk1.length)



let mn2 = " rohit "
console.log(mn2.length)
let kk2 = mn2.trimEnd()
console.log(kk2.length)




// method chaining


let mapA= [11,22,33]
let sa = mapA.map(function(el){
    return el +2
}).reduce(function(acc,el){
    return acc +e
},0)

console.log(sa)
