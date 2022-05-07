let students = [
    {
        fullName : "shweta",
        age:12,
        skills : ["java","python","c++","html"],
        city :"pune"
    },
    {
        fullName : "sahebrao",
        age:22,
        skills : ["java","python","c++"],
        city :"pune"

    },
{
    fullName : "akshay",
        age: 23,
        skills : ["java","c++"],
        city :"pune"
}
]


for(let i = 0 ; i<students.length; i ++){
    console.log(students[i])
}

for(let i =0 ; i<students.length ; i++){
    console.log(students[i].fullName,students[i].skills.length)
}

 let ss = students.find(function(el){
     return el.fullName.startsWith('a')
 })
 console.log(ss)

//  sum of ages
let bb = students.reduce(function(acc,el){
    return  acc + el.age
},0)
console.log(bb/students.length)


// add get

students.forEach(function(el){
    (el.skills.push("git"))
})
console.log(students)


// student with pythoon skills
// 1st way
let ggn= students.filter(function(el){
    return el.skills.inclues('python')
})
ggn.forEach(function(el){
    console.log(el.fullName)
})

// 2nd way

let  jjj = students.filter(function(el){
    return el.skills.indexof('python') >= 0
})

jjj.forEach(function(el){
    console.log(el.fullName)
})

