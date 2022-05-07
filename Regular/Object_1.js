
let  shweta = {
    fullName : "shweta kshirsagar",
    age : 24,
    skills :["python","javascript"]
}


let  rohit = {
    fullName : "rohit pawar",
    age :25,
    skills : ["testing","selenium"]
}


// add

shweta.lang = "marathi"
console.log(shweta)

// update

shweta.age = 25
console.log(shweta)

// retrive 
 console.log(shweta.age)

//  delete 
delete shweta.age
console.log(shweta)



console.log("************************************************************")
// settting the property outside the class


 class Person {
     fullName = undefined
     age = undefined
  
     skills = undefined
 }
  
 let  shweta1 = new Person()
 console.log(shweta1)


shweta1.fullName = "shweta pawar"
shweta1.age = 26
shweta1.skills = ["testing","cypress","javascript"]
console.log(shweta1)


// Setting the property at the time of object creation

class Person2{
    constructor(fn,ag,sk){
        this.fullName = fn 
        this.age = ag
        this.skills = sk
    }
}

let shweta2 = new Person2("shweta",34,"java")
let shweta3 = new Person2("sh",55,"sql")
console.log(shweta2)
console.log(shweta3)

shweta2.city = "Miraj"
console.log(shweta2)
console.log("**********************************************")


let students = [
    new Person2("shweta",44,['py','js']),
    new Person2("smita",55,['sql','testing']),
    new Person2("sumit",66,['java','js'])
]

console.log(students[0])
console.log(students[1])
console.log(students[2])

console.log('--------*---------')
students.forEach(function(el){
    //console.log(el) 
    for(let key in el){
        console.log(key, el[key])
    }
})

students.forEach(function(el){
  el.lang = "marathi"
})

students.forEach(function(el){
    //console.log(el) 
    for(let key in el){
        console.log(key, el[key])
    }
})

class Employ {
    constructor (aa,bb,cc){

        this.empName = aa
        this.empID = bb
        this.city = cc
 }
 }

 let alliswell = new Employ("shweta",213,"Miraj")
 console.log(alliswell)

 let alliswell1 = new Employ("rohit",44,"pune")
 console.log(alliswell1)

let empsal =[
    new Employ("Vira",213,"Pune"),
    new Employ("Varun",243,"Sangli"),
    new Employ("Vasu",25,"mumbai")
]

console.log(empsal[0]);
console.log(empsal[1])

//Add lang 

empsal.forEach(function(el){
    el.language = "marathi"
})
console.log(empsal)




empsal.forEach(function(el){
    //console.log(el) 
    for(let key in el){
        console.log(key,el[key])
    }
})


console.log("***********************DAY2****************************************")

const { fn } = require("cypress/types/jquery")

let shweta1111 = {
    fullName :"shweta kshirsagar",
    age : 33,
    city : "pune",
    skills :["javascript","cypress","sql"]
}

// Types of object creation

// function constructor
// ES6 class
// Object create


// setting the properties outside the class

class Person100 {
    fullName =  undefined
    City =  undefined
    skills =  undefined
}

let shweta10 = new Person100()
Person.fullname = "shweta kshirsagar"
Person.City = "pune",
Person.skills = ["javascript","sql"]
console.log(Person100)
console.log(shweta10)


// setting the the properties at the time of object creation

class Person101{
    constructor(nm,ag,ci){
        this.fullName = fn
        this.age = ag
        this.age = ci
    }

}
let lion = new Person101("shweta pawar",33,"Pune")
console.log(lion)













