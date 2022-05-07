let num = [10,11,12,13,14]
let a = num[0]
let b = num[1]
let c = num[2]
let d = num[3]
let e = num[4]

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)


// object 

let Person = {

firstName : "shweta",
lastName : "kshirsagar",
age :25
}

let {firstName : A, lastName : B ,age:CC} = Person
console.log(A)
console.log(B)
console.log(CC)


/*************************************************/ 

let Person2 = {
    fullName : "Shweta Kshirsagar",
    city : "Miraj",
    Skills : ["java","js","cypress"]
}

let {fullName:xx,city:yy,Skills:[l,m,n]} = Person2
console.log(m)
console.log(xx)

/*************************************************/ 
let class1 = [
    {
        namee : "shweta",
        rollNo : 3
    },
    {
        namee :"rohit",
        rollNo :4
    }]

    let [{namee : g , rollno : h , namee :ss,rollNo :ff}] = class1
    console.log(g)




