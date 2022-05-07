// Object literal

let shweta = {
    fullname : "shweta Kshirsagar",
    skills : ["js","py"],
    city : "Miraj"
}

// Function constructor

let Person = 
function(fullName,age,skills){
    this.fullName = fullName
    this.age = age
    this.skills = skills
}

let aa = new Person("shweta",25,["js","py"])
console.log(aa)

let bb = new Person("rohit",26,["js","py"])
console.log(bb)

// Prototype in heritance

console.log(aa._proto_ = Person.prototype)
Person.prototype.display =
function(){
    console.log(this.fullName)
}

Person.prototype.language = "Marathi"
console.log(aa)
console.log(bb)

aa.display()
bb.display()

// console.log(aa  instance of Person)
// console.log(aa .hasOwnProperty("language"))


// Object._proto ===  Perebt.Prototype

// ES6


let names  = ["rohit","shweta","smita","sumit","akshay"]

// object --

console.log(names)


// Array
names.push("vinit")
console.log(names._proto_ === Array.prototype )

/************************************************/ 

class Person2{
    constructor(fn,ag,sk){
        this.fullName =fn 
        this.age = ag
        this.skills = ag
    }

    display(){
        console.log(this.fullName)
    }
    
}

let Dev = new Person2("dev",44,["js","py"])
console.log(Dev)

//_proto_ === parent.prototype
// ---------------------Object.create

// _proto_

let dev1 = Object.create({})
console.log(dev1)

dev1.fullname = "shweta",
dev1.age = 33,
dev1.city = "pune"

// Another object =====>Using object create


let prototype = {
    display:function(){
        console.log(this.fullName)
    }
}


let test = Object.create(prototype)
test.fullName = "shweta ks"
test.display()
console.log(test)

// ------------------------------------------------


let prototype2 = {
    display:function(){
        console.log(this.fullName)
    },


init : function(fn,ag,skills){
    this.fullName = fn
    this.age = ag
    this.skills = skills

}
}

let rohit = Object.create(prototype2)
console.log(rohit)
rohit.init("c",23,["py","js"])
console.log(rohit)
