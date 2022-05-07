console.log("Hello")

// Function Constructor


let Person1 = 
function(fullname,age,skills){
    this.fullnamen= fullname 
    this.age = age
    this.skills = skills
}

let shweta = new Person1("shweta",34,["python","js"])
console.log(shweta)

// Function contrcutor 2nd example-->

let Person2 = 
function(name,age,city){
    this.name = name
    this.age = age
    this.city = city
}

let rohit = new Person2("rohit",33,["testing","automation"])
console.log(rohit)

// Prototype inheritance -->

console.log(rohit.__proto__=== Person2.prototype)


Person2.prototype.display = function(){
    console.log(this.name)}

Person2.prototype.lang = "marathi"
console.log(rohit.lang)
rohit.display()
console.log(rohit)

// Object.create method


let shweta10 = Object.create({})
console.log(shweta10)


shweta10.name = "shweta",
shweta10.age = 26,
shweta10.city = "pune"
console.log(shweta10)


