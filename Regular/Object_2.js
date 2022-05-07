

let shweta = {
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

class Person {
    fullName =  undefined
    City =  undefined
    skills =  undefined
}

let shweta1 = new Person()
shweta1.fullname = "shweta kshirsagar"
shweta1.City = "pune"
shweta1.skills = ["javascript","sql"]
console.log(shweta1)


// setting the the properties at the time of object creation

class Person1{
    constructor(nm,ag,ci){
        this.fullName = nm
        this.age = ag
        this.age = ci
    }

}
let lion = new Person1("shweta pawar",33,"Pune")
console.log(lion)


// setting the properties using function

class Person5{
    shweta(age){
        this.age = age
    }
setSkills(sk){
    this.skills= sk
}

setfullName(fn){
    this.fullname = fn
}
}

let king = new Person5()
console.log(king)

king.shweta(12)
console.log(king)
king.setSkills(["python","css"])
console.log(king)
king.setfullName("rohit pawar")
console.log(king)


console.log('*******************************Example2***********************************')

 class Flowers{
    constructor(nm,cl){
        this.name = nm
        this.color =cl
    }
}

let  Orange = new Flowers("ROSE","RED")
console.log(Orange)


let Vehicle = function(type,color){
    this.type = type
    this.color = color
    this.display = function(){        
        console.log('welcome to car exibition')
    }

}

let jaguar = new Vehicle ("swedane","red")
let audi = new Vehicle ("sedane","black")
console.log(jaguar)
console.log(audi)



// Problem function isgetting addded to every element

// Every Object ==>
// obj._proto_=== derive.prototype

Vehicle.prototype.display = function(){
    console.log("welcome to car exibition")
}

jaguar.display()
audi.display()


// *************************


let Person9 = function(fn,roll){
    this.fullName = fn
    this.roll = roll
    // this.dis = function(){
    //     console.log("hello")
    // }

}

let shweta10 = new Person9('shweta',10)
let smita = new Person9('smita',22)
console.log(shweta10)
console.log(smita)


console.log(Person9.protype === smita._proto_)

Person9.prototype.dis = function(){
    console.log('hello')
}

shweta10.dis()
smita.dis()






