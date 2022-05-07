// program one
let names =  ["shweta","rohit","sumit","akshay"]
 let  p = names[0]
 let  q = names[1]
 let  r = names[2]
 let  s = names[3]

 console.log(p)
 console.log(q)
 console.log(r)
 console.log(s)


//  destructure


let [a,b,c] = names
console.log(a)
console.log(b)
console.log(c)

let city  = ["pune","mumbai","jap=ipur"]
let [ aa,bb,cc] = city
console.log(aa)
console.log(bb)
console.log(cc)

// program 2
  
let array = [[11,22,33],[11,12,12],["a","b","c"]]

let [[aaa,bbb, ccc],[pp,qq,rr],[xx,yy,zz]] = array
console.log(yy)
console.log(pp)

// program 3

let personn = ["shweta","smita","sumit","akshay"]

let person2 = {
    firstName :"shweta",
    lastName :"kshirsagar",
    rollNo : 23,
    age : 45
}

let{rollNo,firstName,lastName,age} = person2
console.log(rollNo)
console.log(firstName)
console.log(lastName)
console.log(age)


let {rollNo : as ,age :ad, firstName:ac ,lastName :d} = person2
console.log(as)
console.log(ad)
console.log(ad)
console.log(d)


// program 3


let arr2 = {
    mmm : "shweta",
    acc: "pawar",
    add : ["python","cpp","javascript"],
    parent : {
        mother :"vandana",
        father : "sahebrao"
    }
}

let{ abb:l,acc :m , acc :n,parent :{mother :o,father :PP}} = arr2
console.log(m)
console.log(PP)

// prgoram 5

let students = [{
    firstName :"shweta",
    lastName : "kshirsagar"
},
{
    firstName : "sumit",
    lastName : "kshirsagar"
},
{
    firstName : "ram",
    lastName : "vijay"
}]

let [{firstName :f1 ,lastName : f2 },{firstName : f3 ,lastName : f4},{firstName : f5,lastName :f6}]  = students

console.log (f1)
console.log(f6)

