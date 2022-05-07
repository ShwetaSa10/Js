const { reverse } = require("cypress/types/lodash")

let Person = {
    fullName :"shweta",
    lastName : "pawar",
    rollNo : 22,
    city : "Miraj"
}
// retrive using .notation
let aa = Person.fullName 
console.log(aa)
// update using .norttion
let dd= Person.fullName = "Rohit"
console.log(dd)
// add

let ff = Person.Lang = "Marathi"
console.log(ff)
console.log(Person)

// delete 
delete Person.city 
console.log(Person)

Vehicle = {
    car: "audi",
    color : "black"
}

console.log(Vehicle.car)
console.log(Vehicle.car = "jaguar")
console.log(Vehicle.regNo = 100)
console.log(Vehicle)
delete Vehicle.color
console.log(Vehicle)


// reverse String

let city = Miraj
rev = ""
 
for(let i = 0 ;i<city.length;i++){
    rev = rev + city[i]
}
console.log(rev)